import { Form, Header, Separator, Tweet } from "../../components";

import { Sparkle } from "phosphor-react";
import { useTheme } from "styled-components";
import { ContentContainer } from "../../components/Content/styles";

const mockedTweets = [
  {
    imgSrc: "https://avatars.githubusercontent.com/u/38770302?v=4",
    imgAlt: "User Avatar",
    author: "Gerson Rocha",
    authorUsername: "@GersonRocha9",
    content:
      "Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: <br /> <br /> ✅ npm start: De 32s para 400ms (sim, demorava 30s) <br /> ✅ npm build: De 120s para 22s <br /> <br /> Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥 <br />",
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
      "Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: <br /> <br /> ✅ npm start: De 32s para 400ms (sim, demorava 30s) <br /> ✅ npm build: De 120s para 22s <br /> <br /> Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥 <br />",
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
      "Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: <br /> <br /> ✅ npm start: De 32s para 400ms (sim, demorava 30s) <br /> ✅ npm build: De 120s para 22s <br /> <br /> Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥 <br />",
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
      "Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: <br /> <br /> ✅ npm start: De 32s para 400ms (sim, demorava 30s) <br /> ✅ npm build: De 120s para 22s <br /> <br /> Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥 <br />",
    comments: 12,
    retweets: 2,
    likes: 5,
  },
];

const mockedComments = [
  {
    imgSrc: "https://avatars.githubusercontent.com/u/38770302?v=4",
    imgAlt: "User Avatar",
    author: "Gerson Rocha",
    authorUsername: "@GersonRocha9",
    content: "Concordo",
    comments: 12,
    retweets: 2,
    likes: 5,
  },
  {
    imgSrc: "https://avatars.githubusercontent.com/u/38770302?v=4",
    imgAlt: "User Avatar",
    author: "Gerson Rocha",
    authorUsername: "@GersonRocha9",
    content: "Olha, faz sentido",
    comments: 12,
    retweets: 2,
    likes: 5,
  },
  {
    imgSrc: "https://avatars.githubusercontent.com/u/38770302?v=4",
    imgAlt: "User Avatar",
    author: "Gerson Rocha",
    authorUsername: "@GersonRocha9",
    content: "Parabéns pelo projeto",
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
