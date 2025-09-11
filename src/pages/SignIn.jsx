import React, { useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

const GOOGLE_ENABLED = process.env.REACT_APP_GOOGLE_AUTH === 'on';

export default function SignIn() {
  const [params] = useSearchParams();
  const intent = (params.get('mode') || 'signup').toLowerCase();
  const [mode, setMode] = useState(intent === 'signin' ? 'signin' : 'signup');
  const isSignup = mode === 'signup';

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwd2, setPwd2] = useState('');
  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const { reloadProfile } = useAuth();
  const navigate = useNavigate();

  const title = isSignup ? 'Create your account' : 'Sign in';
  const subtitle = isSignup
    ? 'Use your name and FAU email to create an account.'
    : 'Enter your email and password to continue.';

  const canSubmit = useMemo(() => {
    if (!email || !pwd) return false;
    if (isSignup && (!fullName.trim() || pwd !== pwd2)) return false;
    return true;
  }, [email, pwd, isSignup, fullName, pwd2]);

  const handleSignup = async (e) => {
    e.preventDefault();
    setMsg(null);
    if (pwd.length < 8) {
      setMsg({ type: 'error', text: 'Password must be at least 8 characters.' });
      return;
    }
    if (pwd !== pwd2) {
      setMsg({ type: 'error', text: 'Passwords do not match.' });
      return;
    }

    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password: pwd,
      options: {
        data: { full_name: fullName.trim() }, // saves to user_metadata
        emailRedirectTo: window.location.origin
      }
    });
    setLoading(false);

    if (error) {
      setMsg({ type: 'error', text: error.message });
      return;
    }

    if (!data.session) {
      // Email confirmations enabled
      setMsg({ type: 'ok', text: 'Check your inbox to confirm your email, then sign in.' });
      // optional: auto-switch to Sign in tab
      setTimeout(() => setMode('signin'), 1200);
    } else {
      // Auto-logged in (confirmations disabled)
      setMsg({ type: 'ok', text: 'Account created!' });
      await reloadProfile?.();
      navigate('/');
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    setMsg(null);
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: pwd
    });
    setLoading(false);
    if (error) {
      setMsg({ type: 'error', text: error.message }); // e.g., Invalid login credentials
      return;
    }
    // success
    await reloadProfile?.();
    navigate('/');
  };

  const sendResetEmail = async () => {
    if (!email) {
      setMsg({ type: 'error', text: 'Enter your email above first, then click "Forgot password?"' });
      return;
    }
    setMsg(null);
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`
    });
    setLoading(false);
    if (error) setMsg({ type: 'error', text: error.message });
    else setMsg({ type: 'ok', text: 'Password reset link sent. Check your email.' });
  };

  const signInWithGoogle = async () => {
    setMsg(null);
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin }
    });
    setLoading(false);
    if (error) setMsg({ type: 'error', text: `Google sign-in error: ${error.message}` });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#192858] via-[#1f2f6b] to-white flex items-start sm:items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="flex items-center gap-3 mb-6 text-white">
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
            <span className="font-bold text-sm">SHPE</span>
          </div>
          <h1 className="text-2xl font-semibold">SHPE @ FAU</h1>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-white shadow-xl p-6">
          {/* Tabs */}
          <div className="mb-5 grid grid-cols-2 rounded-lg bg-gray-100 p-1">
            <button
              type="button"
              onClick={() => setMode('signup')}
              className={`py-2 rounded-md text-sm font-medium transition ${isSignup ? 'bg-white shadow text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Create account
            </button>
            <button
              type="button"
              onClick={() => setMode('signin')}
              className={`py-2 rounded-md text-sm font-medium transition ${!isSignup ? 'bg-white shadow text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Sign in
            </button>
          </div>

          <h2 className="text-xl font-semibold mb-1">{title}</h2>
          <p className="text-sm text-gray-600 mb-4">{subtitle}</p>

          {msg && (
            <div className={`mb-4 rounded-lg border px-3 py-2 text-sm ${msg.type === 'ok' ? 'border-green-300 bg-green-50 text-green-700' : 'border-red-300 bg-red-50 text-red-700'}`}>
              {msg.text}
            </div>
          )}

          <form onSubmit={isSignup ? handleSignup : handleSignin} className="space-y-3">
            {isSignup && (
              <label className="block text-sm font-medium text-gray-700">
                Full name
                <input
                  type="text"
                  className="mt-1 w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-[#192858]/40"
                  placeholder="First Last"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </label>
            )}

            <label className="block text-sm font-medium text-gray-700">
              Email
              <input
                type="email"
                className="mt-1 w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-[#192858]/40"
                placeholder="you@fau.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label className="block text-sm font-medium text-gray-700">
              Password
              <input
                type="password"
                className="mt-1 w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-[#192858]/40"
                placeholder={isSignup ? 'At least 8 characters' : 'Your password'}
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                required
                minLength={8}
              />
            </label>

            {isSignup && (
              <label className="block text-sm font-medium text-gray-700">
                Confirm password
                <input
                  type="password"
                  className="mt-1 w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-[#192858]/40"
                  placeholder="Re-enter your password"
                  value={pwd2}
                  onChange={(e) => setPwd2(e.target.value)}
                  required
                  minLength={8}
                />
              </label>
            )}

            <button
              className="w-full rounded-lg bg-[#1a5cff] text-white py-2 font-medium disabled:opacity-60"
              disabled={loading || !canSubmit}
            >
              {loading ? (isSignup ? 'Creating…' : 'Signing in…') : (isSignup ? 'Create account' : 'Sign in')}
            </button>
          </form>

          {!isSignup && (
            <button
              type="button"
              onClick={sendResetEmail}
              className="mt-3 text-sm text-[#1a5cff] hover:underline"
              disabled={loading}
            >
              Forgot password?
            </button>
          )}

          {GOOGLE_ENABLED && (
            <>
              <div className="relative my-5">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white px-2 text-gray-500">or</span>
                </div>
              </div>
              <button
                type="button"
                onClick={signInWithGoogle}
                className="w-full rounded-lg border py-2 font-medium hover:bg-gray-50 disabled:opacity-60"
                disabled={loading}
              >
                Continue with Google
              </button>
            </>
          )}

          <p className="mt-4 text-xs text-gray-500">
            By continuing, you agree to our community rules. Need help? Contact the E-Board.
          </p>
        </div>
      </div>
    </main>
  );
}
