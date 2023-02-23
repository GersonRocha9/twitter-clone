import { Form, Header, Separator, Tweet } from "../../components";

import { Sparkle } from "phosphor-react";
import { useTheme } from "styled-components";
import { ContentContainer } from "./styles";

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
