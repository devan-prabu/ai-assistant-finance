// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://oejrvljoluinkmfarwht.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lanJ2bGpvbHVpbmttZmFyd2h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzMzQ0OTMsImV4cCI6MjA2MzkxMDQ5M30.qOuGorSi8eDRSbs1Il16jaZZVogB7ub0auSyWO93bAE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);