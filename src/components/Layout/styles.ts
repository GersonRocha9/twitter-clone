import styled from "styled-components";

export const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;

  display: grid;
  grid-template-columns: 300px 1fr;

  @media (max-width: 780px) {
    grid-template-columns: 80px 1fr;
  }
`;
