import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { ensureProfile } from '../utils/ensureProfile';

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchProfile(uid) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', uid)
      .maybeSingle();
    if (error) console.error('fetchProfile error:', error.message);
    setProfile(data ?? null);
    return data ?? null;
  }

  function looksPlaceholder(name, email) {
    const local = (email || '').split('@')[0];
    if (!name) return true;
    if (name.toLowerCase() === local.toLowerCase()) return true;
    // treat single-token names as placeholder (no space)
    if (!name.includes(' ')) return true;
    return false;
  }

  async function applySavedNameIfAny(user, prof) {
    if (!user?.id) return;
    let saved = '';
    try { saved = localStorage.getItem('signup_full_name') || ''; } catch {}
    if (!saved) return;

    const current = prof?.full_name || '';
    const email = prof?.email || user.email || '';
    if (!looksPlaceholder(current, email)) {
      // already a good name; discard saved one
      try { localStorage.removeItem('signup_full_name'); } catch {}
      return;
    }

    // Update auth metadata (so future sessions carry it)
    await supabase.auth.updateUser({ data: { full_name: saved } });
    // Update profiles table
    await supabase.from('profiles').update({ full_name: saved }).eq('id', user.id);

    try { localStorage.removeItem('signup_full_name'); } catch {}
    await fetchProfile(user.id);
  }

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);

      if (session?.user?.id) {
        await ensureProfile(session.user);         // create row if missing
        const prof = await fetchProfile(session.user.id);
        await applySavedNameIfAny(session.user, prof);
      }

      setLoading(false);
    })();

    const { data: sub } = supabase.auth.onAuthStateChange(async (_evt, sess) => {
      setSession(sess);
      if (sess?.user?.id) {
        await ensureProfile(sess.user);
        const prof = await fetchProfile(sess.user.id);
        await applySavedNameIfAny(sess.user, prof);
      } else {
        setProfile(null);
      }
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  const value = {
    loading,
    session,
    user: session?.user ?? null,
    profile,
    reloadProfile: () => session?.user?.id && fetchProfile(session.user.id),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
