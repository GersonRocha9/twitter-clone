import styled from "styled-components";

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 780px) {
    span {
      display: none;
    }
  }
`;
