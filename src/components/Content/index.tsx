import { Form, Header, Separator, Tweet } from "../../components";

import { ContentContainer } from "./styles";
import { Sparkle } from "phosphor-react";
import { useTheme } from "styled-components";

export const mockedTweets = [
  {
    imgSrc: "https://avatars.githubusercontent.com/u/38770302?v=4",
    imgAlt: "User Avatar",
    author: "Gerson Rocha",
    authorUsername: "@GersonRocha9",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus similique repudiandae nemo nesciunt placeat labore, hic aspernatur quibusdam ut quo deserunt asperiores reiciendis quas ad pariatur architecto voluptate explicabo?",
    comments: 12,
    retweets: 2,
    likes: 5,
  },
  {
    imgSrc: "https://avatars.githubusercontent.com/u/38770302?v=4",
    imgAlt: "User Avatar",
    author: "Gerson Rocha",
    authorUsername: "@GersonRocha9",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus similique repudiandae nemo nesciunt placeat labore, hic aspernatur quibusdam ut quo deserunt asperiores reiciendis quas ad pariatur architecto voluptate explicabo?",
    comments: 12,
    retweets: 2,
    likes: 5,
  },
  {
    imgSrc: "https://avatars.githubusercontent.com/u/38770302?v=4",
    imgAlt: "User Avatar",
    author: "Gerson Rocha",
    authorUsername: "@GersonRocha9",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus similique repudiandae nemo nesciunt placeat labore, hic aspernatur quibusdam ut quo deserunt asperiores reiciendis quas ad pariatur architecto voluptate explicabo?",
    comments: 12,
    retweets: 2,
    likes: 5,
  },
  {
    imgSrc: "https://avatars.githubusercontent.com/u/38770302?v=4",
    imgAlt: "User Avatar",
    author: "Gerson Rocha",
    authorUsername: "@GersonRocha9",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus similique repudiandae nemo nesciunt placeat labore, hic aspernatur quibusdam ut quo deserunt asperiores reiciendis quas ad pariatur architecto voluptate explicabo?",
    comments: 12,
    retweets: 2,
    likes: 5,
  },
];

export const Content = () => {
  const theme = useTheme();

  return (
    <ContentContainer>
      <Header
        title="Home"
        icon={<Sparkle size={24} color={theme.colors.base.primary} />}
      />

      <Form
        placeholder="What's happening?"
        imgAlt="User Avatar"
        imgSrc="https://avatars.githubusercontent.com/u/38770302?v=4"
      />

      <Separator />

      {mockedTweets.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </ContentContainer>
  );
};
