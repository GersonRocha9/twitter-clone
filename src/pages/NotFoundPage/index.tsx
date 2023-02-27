import { Sparkle, Warning } from "phosphor-react";
import {
  ContentContainer,
  Error404Wrapper,
  ErrorCode,
  ErrorMessage,
} from "./styles";

import { useTheme } from "styled-components";
import { Header } from "../../components";

export const NotFoundPage = () => {
  const theme = useTheme();

  return (
    <ContentContainer>
      <Header
        title="Tweet"
        icon={<Sparkle size={24} color={theme.colors.base.primary} />}
      />

      <Error404Wrapper>
        <ErrorCode>
          <Warning size={120} color={theme.colors.base.primary} />
          404
        </ErrorCode>
        <ErrorMessage>
          Oops! The page you are looking for does not exist.
        </ErrorMessage>
      </Error404Wrapper>
    </ContentContainer>
  );
};
