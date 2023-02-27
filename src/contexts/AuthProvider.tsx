import { User, createClient } from "@supabase/supabase-js";
import { ReactNode, createContext, useState } from "react";

export const AuthContext = createContext({});

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  async function signInWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
  }

  supabase.auth.onAuthStateChange((_event, session) => {
    if (session?.user) {
      setUser(session.user);
    }
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
        signOut,
        isLogged: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
