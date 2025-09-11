import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

export default function Dashboard() {
  const { user, profile, reloadProfile } = useAuth();
  const [err, setErr] = useState(null);

  if (!user) return null;

  const updatePoints = async (delta) => {
    const next = Math.max(0, (profile?.points ?? 0) + delta);
    const { error } = await supabase
      .from('profiles')
      .update({ points: next })
      .eq('id', user.id);
    if (error) setErr(error.message);
    else await reloadProfile();
  };

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
      <p className="mb-4">Points: <b>{profile?.points ?? 0}</b></p>
      <div className="flex gap-2">
        <button className="rounded bg-blue-600 text-white px-3 py-2" onClick={() => updatePoints(5)}>+5</button>
        <button className="rounded border px-3 py-2" onClick={() => updatePoints(-5)}>-5</button>
      </div>
      {err && <p className="mt-3 text-sm text-red-600">{err}</p>}
    </main>
  );
}
