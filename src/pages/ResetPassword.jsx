import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate, Link } from 'react-router-dom';

export default function ResetPassword() {
  const [ready, setReady] = useState(false);
  const [hasRecoverySession, setHasRecoverySession] = useState(false);

  // form state
  const [pwd, setPwd] = useState('');
  const [pwd2, setPwd2] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);

  // resend link state (when token invalid/expired)
  const [email, setEmail] = useState('');

  const [msg, setMsg] = useState(null); // { type: 'ok' | 'error', text: string }
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Detect if we have a valid recovery session from the link
  useEffect(() => {
    let unsub;
    (async () => {
      // listen for recovery session
      const { data } = supabase.auth.onAuthStateChange((_event, session) => {
        setHasRecoverySession(!!session);
        setReady(true);
      });
      unsub = data.subscription;

      // check once on load too
      const { data: s } = await supabase.auth.getSession();
      setHasRecoverySession(!!s.session);
      setReady(true);
    })();

    return () => unsub && unsub.unsubscribe();
  }, []);

  const updatePassword = async (e) => {
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
    const { error } = await supabase.auth.updateUser({ password: pwd });
    setLoading(false);

    if (error) {
      setMsg({ type: 'error', text: error.message || 'Could not update password.' });
      return;
    }

    setMsg({ type: 'ok', text: 'Password updated! Redirecting to sign in…' });
    setTimeout(() => navigate('/signin?mode=signin'), 1200);
  };

  const resendReset = async () => {
    setMsg(null);
    if (!email) {
      setMsg({ type: 'error', text: 'Enter your email first.' });
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setLoading(false);
    if (error) setMsg({ type: 'error', text: error.message });
    else setMsg({ type: 'ok', text: 'Reset link sent. Check your email.' });
  };

  if (!ready) return null;

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
          <h2 className="text-xl font-semibold mb-1">
            {hasRecoverySession ? 'Set a new password' : 'Reset your password'}
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            {hasRecoverySession
              ? 'Enter a new password for your account.'
              : 'Your reset link is missing or expired. Send yourself a new one below.'}
          </p>

          {msg && (
            <div
              className={`mb-4 rounded-lg border px-3 py-2 text-sm ${
                msg.type === 'ok'
                  ? 'border-green-300 bg-green-50 text-green-700'
                  : 'border-red-300 bg-red-50 text-red-700'
              }`}
            >
              {msg.text}
            </div>
          )}

          {hasRecoverySession ? (
            <form onSubmit={updatePassword} className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                New password
                <div className="mt-1 relative">
                  <input
                    type={showPwd ? 'text' : 'password'}
                    className="w-full border rounded-lg p-2 pr-20 outline-none focus:ring-2 focus:ring-[#192858]/40"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    required
                    minLength={8}
                    placeholder="At least 8 characters"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-600 hover:text-gray-900"
                  >
                    {showPwd ? 'Hide' : 'Show'}
                  </button>
                </div>
              </label>

              <label className="block text-sm font-medium text-gray-700">
                Confirm password
                <div className="mt-1 relative">
                  <input
                    type={showPwd2 ? 'text' : 'password'}
                    className="w-full border rounded-lg p-2 pr-20 outline-none focus:ring-2 focus:ring-[#192858]/40"
                    value={pwd2}
                    onChange={(e) => setPwd2(e.target.value)}
                    required
                    minLength={8}
                    placeholder="Re-enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd2((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-600 hover:text-gray-900"
                  >
                    {showPwd2 ? 'Hide' : 'Show'}
                  </button>
                </div>
              </label>

              <button
                className="w-full rounded-lg bg-[#1a5cff] text-white py-2 font-medium disabled:opacity-60"
                disabled={loading || !pwd || !pwd2}
              >
                {loading ? 'Updating…' : 'Update password'}
              </button>

              <p className="mt-3 text-xs text-gray-500">
                Done? <Link to="/signin?mode=signin" className="text-[#1a5cff] hover:underline">Back to sign in</Link>
              </p>
            </form>
          ) : (
            <div className="space-y-3">
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
              <button
                onClick={resendReset}
                className="w-full rounded-lg bg-[#1a5cff] text-white py-2 font-medium disabled:opacity-60"
                disabled={loading}
              >
                {loading ? 'Sending…' : 'Send reset link'}
              </button>
              <p className="text-xs text-gray-500">
                We’ll email a secure link that brings you back here to set a new password.
              </p>
              <p className="mt-2 text-xs text-gray-500">
                Remembered it?{' '}
                <Link to="/signin?mode=signin" className="text-[#1a5cff] hover:underline">
                  Go to sign in
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
