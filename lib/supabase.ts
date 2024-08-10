import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pdfvcuuuvzccqozccomx.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkZnZjdXV1dnpjY3FvemNjb214Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxNzM4NzMsImV4cCI6MjAzODc0OTg3M30.OGRohNOj6U43VBFsohKelD5f1DDJiYjkKXzdffMzHec";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
