export const appConfig = {
  mode: process.env.NEXT_PUBLIC_CLIENTFLOW_MODE || "demo",
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
};

export const isDemoMode = appConfig.mode === "demo";
export const isSupabaseMode =
  appConfig.mode === "supabase" &&
  Boolean(appConfig.supabaseUrl) &&
  Boolean(appConfig.supabaseAnonKey);
