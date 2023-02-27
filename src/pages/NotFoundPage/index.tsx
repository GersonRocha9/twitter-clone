import {
  ContentContainer,
  Error404Wrapper,
  ErrorCode,
  ErrorMessage,
} from "./styles";

import { Sparkle } from "phosphor-react";
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
        <ErrorCode>404</ErrorCode>
        <ErrorMessage>Oops! Page not found!</ErrorMessage>
      </Error404Wrapper>
    </ContentContainer>
  );
};
