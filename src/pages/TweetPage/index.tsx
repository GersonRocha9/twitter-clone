import { useContext, useEffect } from "react";
import { Form, Header, Separator, Tweet } from "../../components";

import { Sparkle } from "phosphor-react";
import { useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { TweetContextData } from "../../@types";
import { TweetContext } from "../../contexts";
import { ContentContainer } from "./styles";

export const TweetPage = () => {
  const theme = useTheme();
  const { id } = useParams();
  const {
    getTweetFromDatabaseWithId,
    getCommentsFromDatabaseWithId,
    comments,
    tweet,
  } = useContext(TweetContext) as TweetContextData;

  useEffect(() => {
    getTweetFromDatabaseWithId(id as string);
  }, []);

  useEffect(() => {
    getCommentsFromDatabaseWithId(id as string);
  }, [id]);

  return (
    <ContentContainer>
      <Header
        title="Tweet"
        icon={<Sparkle size={24} color={theme.colors.base.primary} />}
      />

      <Tweet {...tweet} />

      <Separator />

      <Form placeholder="Tweet your answer" isAnswer />

      {comments.map((comment, index) => (
        <Tweet key={index} {...comment} />
      ))}
    </ContentContainer>
  );
};
