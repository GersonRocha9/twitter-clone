import { useContext, useEffect } from "react";
import { TweetContextData, TweetProps } from "../../@types";
import { Form, Header, Separator, Tweet } from "../../components";

import { Sparkle } from "phosphor-react";
import { useTheme } from "styled-components";
import { TweetContext } from "../../contexts";
import { ContentContainer } from "./styles";

export const Content = () => {
  const theme = useTheme();

  const { tweets, getTweetsFromDatabase } = useContext(
    TweetContext
  ) as TweetContextData;

  useEffect(() => {
    getTweetsFromDatabase();
  }, []);

  return (
    <ContentContainer>
      <Header
        title="Home"
        icon={<Sparkle size={24} color={theme.colors.base.primary} />}
      />

      <Form placeholder="What's happening?" />

      <Separator />

      {tweets.map((tweet: TweetProps, index: number) => (
        <Tweet key={index} {...tweet} />
      ))}
    </ContentContainer>
  );
};
