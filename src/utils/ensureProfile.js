import { supabase } from '../lib/supabase';

export async function ensureProfile(user) {
  if (!user?.id) return;

  const { data: existing, error: fetchErr } = await supabase
    .from('profiles')
    .select('id')
    .eq('id', user.id)
    .maybeSingle();

  if (fetchErr) {
    console.error('ensureProfile fetch error:', fetchErr.message);
    return;
  }

  if (!existing) {
    const name =
      user.user_metadata?.full_name ||
      user.user_metadata?.name ||
      (user.email ? user.email.split('@')[0] : 'Member');

    const { error: insertErr } = await supabase.from('profiles').insert({
      id: user.id,
      full_name: name,
      email: user.email
    });

    if (insertErr) {
      console.error('ensureProfile insert error:', insertErr.message);
    }
  }
}
