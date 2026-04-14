import { createClient } from "@supabase/supabase-js";
import { appConfig, isSupabaseMode } from "./app-config";

let browserClient = null;

export function getSupabaseBrowserClient() {
  if (!isSupabaseMode) {
    return null;
  }

  if (!browserClient) {
    browserClient = createClient(appConfig.supabaseUrl, appConfig.supabaseAnonKey);
  }

  return browserClient;
}
