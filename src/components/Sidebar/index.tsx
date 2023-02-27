import { GoogleLogo, SignOut } from "phosphor-react";
import { LoginButton, Menu } from "../../components";
import { SidebarContainer, UserContainerInfo } from "./styles";

import { useContext } from "react";
import { useTheme } from "styled-components";
import { AuthContextData } from "../../@types";
import twitterLogo from "../../assets/logo-twitter.svg";
import { AuthContext } from "../../contexts";

export const Sidebar = () => {
  const { signInWithGoogle, signOut, user, isLogged } = useContext(
    AuthContext
  ) as AuthContextData;

  const theme = useTheme();

  return (
    <SidebarContainer>
      <img src={twitterLogo} alt="Twitter Logo" />

      <Menu />

      {isLogged && (
        <UserContainerInfo>
          <img src={user?.user_metadata?.avatar_url} alt="User avatar" />
          <h3>Olá, {user?.user_metadata?.full_name}</h3>
        </UserContainerInfo>
      )}

      {!isLogged && (
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

      {isLogged && (
        <LoginButton
          label="Sair"
          icon={<SignOut size={20} color={theme.colors.base.primary} />}
          onClick={signOut}
        />
      )}
    </SidebarContainer>
  );
};
