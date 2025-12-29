// supabase-client.js
// Shared Supabase client for Method of Mind
// This file is imported by other pages using <script type="module">

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// 🔐 Replace these with YOUR Supabase project values
const SUPABASE_URL = "https://jyykdolqrmxyjgqdlnhi.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5eWtkb2xxcm14eWpncWRsbmhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5ODU2MzIsImV4cCI6MjA4MjU2MTYzMn0.S4S_PCHMpKpBCzrbMJQLYXfzomRRkNPFcV43dL0PpTw";

// Create the Supabase client
export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  }
);

// Helper: get the currently logged-in user (or null)
export async function getUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
  return data.user ?? null;
}

