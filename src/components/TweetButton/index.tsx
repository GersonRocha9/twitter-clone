import { ButtonContainer } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  width?: string;
  icon?: React.ReactNode;
}

export const TweetButton = ({
  label,
  width = "100%",
  icon,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer width={width} {...props}>
      {icon}
      <span>{label}</span>
    </ButtonContainer>
  );
};
