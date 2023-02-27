import styled from "styled-components";

export const Error404Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ErrorCode = styled.h1`
  font-size: 120px;
  font-weight: bold;
  margin: 0;
`;

export const ErrorMessage = styled.h2`
  font-size: 24px;
  margin-top: 32px;
`;

export const ContentContainer = styled.main`
  border-left: 1px solid ${({ theme }) => theme.colors.base.border};
  border-right: 1px solid ${({ theme }) => theme.colors.base.border};
`;
