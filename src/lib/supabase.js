import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://zjtqttusnhckvulxqtst.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_vCBOIxJuLKxEa3s0uC2Iuw_sahDcRKR'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
