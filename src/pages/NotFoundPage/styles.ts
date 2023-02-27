import styled from "styled-components";

export const Error404Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 0 32px;
  text-align: center;
`;

export const ErrorCode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 120px;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors.base.primary};
`;

export const ErrorMessage = styled.h2`
  font-size: 24px;
  margin-top: 32px;
  color: ${({ theme }) => theme.colors.base.primary};
`;

export const ContentContainer = styled.main`
  border-left: 1px solid ${({ theme }) => theme.colors.base.border};
  border-right: 1px solid ${({ theme }) => theme.colors.base.border};
`;
