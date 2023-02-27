import { User } from "@supabase/supabase-js";

export interface AuthContextData {
  user: User | null;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  isLogged: boolean;
}
