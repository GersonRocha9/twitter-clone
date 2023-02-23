import styled from "styled-components";

interface ButtonContainerProps {
  width?: string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border-radius: 9999px;
  padding: 0.75rem 1.5rem;
  background: var(--twitter-blue); // TODO: change to theme
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || "100%"};
  color: #fff;
  font-weight: 900;
  font-size: 1.25rem;
  border: 0;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
