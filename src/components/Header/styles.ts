import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 1.5rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 700;
  border-bottom: 1px solid ${({ theme }) => theme.colors.base.border};
`;
