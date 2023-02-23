import { Form, Header, Separator } from "../../components";

import { Sparkle } from "phosphor-react";
import { ContentContainer } from "./styles";

export const Content = () => {
  return (
    <ContentContainer>
      <Header title="Home" icon={<Sparkle size={24} color="#1da1f2" />} />

      <Form
        placeholder="What's happening?"
        imgAlt="User Avatar"
        imgSrc="https://avatars.githubusercontent.com/u/38770302?v=4"
      />

      <Separator />
    </ContentContainer>
  );
};
