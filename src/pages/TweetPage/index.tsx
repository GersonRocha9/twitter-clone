import { Sparkle } from "phosphor-react";
import { Header } from "../../components";
import { ContentContainer } from "../../components/Content/styles";

export const TweetPage = () => {
  return (
    <ContentContainer>
      <Header title="Tweet" icon={<Sparkle size={24} color="#1da1f2" />} />
    </ContentContainer>
  );
};
