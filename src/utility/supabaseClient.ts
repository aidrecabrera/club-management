import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://rcqzhzlmgypggzxcmdjo.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjcXpoemxtZ3lwZ2d6eGNtZGpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMzUzNzMsImV4cCI6MjAzMTcxMTM3M30.ynOnTNYTwE13fWAEkm_MI4ciL8EGlMHqmkC52Zm01ZI";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
