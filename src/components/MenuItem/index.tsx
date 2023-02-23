import { ReactNode } from "react";
import { MenuItemContainer } from "./styles";

interface MenuItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
}

export const MenuItem = ({ icon, label, active }: MenuItemProps) => {
  return (
    <MenuItemContainer className={active ? "active" : ""}>
      {icon}
      {label}
    </MenuItemContainer>
  );
};
