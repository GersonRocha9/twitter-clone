import { User, createClient } from "@supabase/supabase-js";
import { GoogleLogo, SignOut } from "phosphor-react";
import { LoginButton, Menu } from "../../components";
import { SidebarContainer, UserContainerInfo } from "./styles";

import { useState } from "react";
import { useTheme } from "styled-components";
import twitterLogo from "../../assets/logo-twitter.svg";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export const Sidebar = () => {
  const [user, setUser] = useState<User | null>(null);
  const theme = useTheme();

  async function signInWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173",
      },
    });
  }

  async function signout() {
    await supabase.auth.signOut();
  }

  supabase.auth.onAuthStateChange((_event, session) => {
    if (session?.user) {
      setUser(session.user);
    }
  });

  return (
    <SidebarContainer>
      <img src={twitterLogo} alt="Twitter Logo" />

      <Menu />

      {user && (
        <UserContainerInfo>
          <img src={user?.user_metadata?.avatar_url} alt="User avatar" />
          <h3>Olá, {user?.user_metadata?.full_name}</h3>
        </UserContainerInfo>
      )}

      {!user && (
        <LoginButton
          label="Entrar com Google"
          icon={
            <GoogleLogo
              size={20}
              color={theme.colors.base.primary}
              weight="bold"
            />
          }
          onClick={signInWithGoogle}
        />
      )}

      {user && (
        <LoginButton
          label="Sair"
          icon={<SignOut size={20} color={theme.colors.base.primary} />}
          onClick={signout}
        />
      )}
    </SidebarContainer>
  );
};
