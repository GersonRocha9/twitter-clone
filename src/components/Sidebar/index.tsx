import { Button, Menu } from "../../components";

import { createClient } from "@supabase/supabase-js";
import { Pencil } from "phosphor-react";
import { useState } from "react";
import twitterLogo from "../../assets/logo-twitter.svg";
import { SidebarContainer } from "./styles";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

interface UserProps {
  id: string;
  created_at: string;
  last_sign_in_at: string;
  phone: string;
  role: string;
  user_metadata: {
    avatar_url: string;
    email: string;
    email_verified: boolean;
    full_name: string;
    name: string;
  };
}

export const Sidebar = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  async function signInWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  async function signout() {
    await supabase.auth.signOut();
  }

  supabase.auth.onAuthStateChange((event, session) => {
    setUser(session?.user ?? null);
  });

  return (
    <SidebarContainer>
      <img src={twitterLogo} alt="Twitter Logo" />

      <Menu />

      {user && <h3>Olá {user?.user_metadata?.full_name}</h3>}

      {!user && (
        <Button
          label="Entrar com Google"
          icon={<Pencil size={20} color="#fff" />}
          onClick={signInWithGoogle}
        />
      )}

      {user && (
        <Button
          label="Sair"
          icon={<Pencil size={20} color="#fff" />}
          onClick={signout}
        />
      )}
    </SidebarContainer>
  );
};
