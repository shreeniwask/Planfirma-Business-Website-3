import { createClient } from '@supabase/supabase-js'
import { projectId, publicAnonKey } from './info'

const supabaseUrl = `https://${projectId}.supabase.co`

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, publicAnonKey)

export default supabase