import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://ileaphwwdajqqxvyvner.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsZWFwaHd3ZGFqcXF4dnl2bmVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMyMjI5ODAsImV4cCI6MjAxODc5ODk4MH0.84B1LejjmCJFcG9fvKGFOB4Wb2DpA6aFBr6kYod9IBw"
);
