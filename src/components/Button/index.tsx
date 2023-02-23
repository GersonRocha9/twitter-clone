import { ButtonContainer } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  width?: string;
}

export const Button = ({ label, width = "100%", ...props }: ButtonProps) => {
  return (
    <ButtonContainer width={width} {...props}>
      {label}
    </ButtonContainer>
  );
};
