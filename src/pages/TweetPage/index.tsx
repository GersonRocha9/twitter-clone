import { Form, Header, Separator, Tweet } from "../../components";

import { ContentContainer } from "../../components/Content/styles";
import { Sparkle } from "phosphor-react";
import { mockedTweets } from "../../components/Content";
import { useTheme } from "styled-components";

const mockedComments = [
  {
    imgSrc: "https://avatars.githubusercontent.com/u/38770302?v=4",
    imgAlt: "User Avatar",
    author: "Gerson Rocha",
    authorUsername: "@GersonRocha9",
    content: "Lorem Ipsum",
    comments: 12,
    retweets: 2,
    likes: 5,
  },
  {
    imgSrc: "https://avatars.githubusercontent.com/u/38770302?v=4",
    imgAlt: "User Avatar",
    author: "Gerson Rocha",
    authorUsername: "@GersonRocha9",
    content: "Lorem Ipsum",
    comments: 12,
    retweets: 2,
    likes: 5,
  },
  {
    imgSrc: "https://avatars.githubusercontent.com/u/38770302?v=4",
    imgAlt: "User Avatar",
    author: "Gerson Rocha",
    authorUsername: "@GersonRocha9",
    content: "Lorem Ipsum",
    comments: 12,
    retweets: 2,
    likes: 5,
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

      <Form
        placeholder="Tweet your answer"
        imgAlt="User Avatar"
        imgSrc="https://avatars.githubusercontent.com/u/38770302?v=4"
        isAnswer
      />

      {mockedComments.map((comment, index) => (
        <Tweet key={index} tweet={comment} />
      ))}
    </ContentContainer>
  );
};
