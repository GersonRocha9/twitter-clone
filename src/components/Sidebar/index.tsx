import { Button, Menu } from "../../components";

import { Pencil } from "phosphor-react";
import { SidebarContainer } from "./styles";
import twitterLogo from "../../assets/logo-twitter.svg";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <img src={twitterLogo} alt="Twitter Logo" />

      <Menu />

      <Button label="Tweet" icon={<Pencil size={20} color="#fff" />} />
    </SidebarContainer>
  );
};
