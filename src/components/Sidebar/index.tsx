import { User, createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Button, Menu } from "../../components";

import { Pencil } from "phosphor-react";
import twitterLogo from "../../assets/logo-twitter.svg";
import { SidebarContainer } from "./styles";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export const Sidebar = () => {
  const [user, setUser] = useState<User | null>(null);

  async function signInWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  async function signout() {
    await supabase.auth.signOut();
  }

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
      } else {
        setUser(null);
      }
    });
  }, []);

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
