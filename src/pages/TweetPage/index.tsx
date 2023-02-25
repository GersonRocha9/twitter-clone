import { Form, Header, Separator, Tweet } from "../../components";

import { Sparkle } from "phosphor-react";
import { useTheme } from "styled-components";
import { ContentContainer } from "../../components/Content/styles";

const mockedTweets = [
  {
    id: 1,
    avatar: "https://avatars.githubusercontent.com/u/38770302?v=4",
    name: "Gerson Rocha",
    username: "@GersonRocha9",
    content: "Lorem Ipsum",
  },
];

const mockedComments = [
  {
    id: 1,
    avatar: "https://avatars.githubusercontent.com/u/38770302?v=4",
    name: "Gerson Rocha",
    username: "@GersonRocha9",
    content: "Lorem Ipsum",
  },
  {
    id: 2,
    avatar: "https://avatars.githubusercontent.com/u/38770302?v=4",
    name: "Gerson Rocha",
    username: "@GersonRocha9",
    content: "Lorem Ipsum",
  },
  {
    id: 3,
    avatar: "https://avatars.githubusercontent.com/u/38770302?v=4",
    name: "Gerson Rocha",
    username: "@GersonRocha9",
    content: "Lorem Ipsum",
  },
  {
    id: 4,
    avatar: "https://avatars.githubusercontent.com/u/38770302?v=4",
    name: "Gerson Rocha",
    username: "@GersonRocha9",
    content: "Lorem Ipsum",
  },
];

export const TweetPage = () => {
  const theme = useTheme();

  return (
    <ContentContainer>
      <Header
        title="Tweet"
        icon={<Sparkle size={24} color={theme.colors.base.primary} />}
      />

      <Tweet tweet={mockedTweets[0]} />

      <Separator />

      <Form placeholder="Tweet your answer" isAnswer />

      {mockedComments.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </ContentContainer>
  );
};
