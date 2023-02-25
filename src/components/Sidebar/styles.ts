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

  button {
    svg {
      display: none;
    }
  }

  @media (max-width: 780px) {
    align-items: center;

    button {
      border-radius: 50%;
      padding: 0.5rem;

      svg {
        display: block;
      }

      span {
        display: none;
      }
    }
  }
`;

export const UserContainerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }

  @media (max-width: 780px) {
    h3 {
      display: none;
    }
  }
`;
