import styled from "styled-components";

export const SeparatorContainer = styled.div`
  background: ${({ theme }) => theme.colors.base.separator};
  border-top: 1px solid ${({ theme }) => theme.colors.base.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.base.border};
  height: 0.75rem;
`;
