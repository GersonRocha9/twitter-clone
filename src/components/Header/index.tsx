import { HeaderContainer } from "./styles";

interface HeaderProps {
  title: string;
  icon: React.ReactNode;
}

export const Header = ({ title, icon }: HeaderProps) => {
  return (
    <HeaderContainer>
      {title}
      {icon}
    </HeaderContainer>
  );
};
