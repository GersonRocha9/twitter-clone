import styled from "styled-components";

export const SidebarContainer = styled.aside`
  padding: 1.5rem 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  img {
    width: 2rem;
    height: 2rem;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    a {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      font-size: 1.25rem;
      font-weight: 700;
      text-decoration: none;
    }

    .active {
      color: ${({ theme }) => theme.colors.base.primary};
    }
  }
`;
