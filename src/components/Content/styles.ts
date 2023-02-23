import styled from "styled-components";

export const ContentContainer = styled.main`
  border-left: 1px solid ${({ theme }) => theme.colors.base.border};
  border-right: 1px solid ${({ theme }) => theme.colors.base.border};
`;
