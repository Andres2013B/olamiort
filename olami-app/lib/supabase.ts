import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://jzyvudqogfrpyzcnnoiv.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6eXZ1ZHFvZ2ZycHl6Y25ub2l2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwNTg0ODcsImV4cCI6MjEwMjYzNDQ4N30.4Rsfgo9XQGdihtF5zX9mBmReMe69Ztw-jpY_lJDbIW4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
