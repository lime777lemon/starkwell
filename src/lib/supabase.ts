import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/database.types'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// 接続テスト用の関数
export async function testSupabaseConnection() {
  try {
    const { error } = await supabase.from('contacts').select('count').single()
    if (error) throw error
    console.log('Supabase connection successful')
    return true
  } catch (error) {
    console.error('Supabase connection error:', error)
    return false
  }
} 