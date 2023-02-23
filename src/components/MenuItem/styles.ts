import styled from "styled-components";

export const MenuItemContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;

  .active {
    color: var(--twitter-blue); // TODO: change to theme
  }
`;
