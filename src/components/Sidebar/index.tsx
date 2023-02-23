import { Button, Menu } from "../../components";

import twitterLogo from "../../assets/logo-twitter.svg";
import { SidebarContainer } from "./styles";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <img src={twitterLogo} alt="Twitter Logo" />

      <Menu />

      <Button label="Tweet" />
    </SidebarContainer>
  );
};
