import { useEffect, useState } from "react";
import { Form, Header, Separator, Tweet } from "../../components";

import { createClient } from "@supabase/supabase-js";
import { Sparkle } from "phosphor-react";
import { useTheme } from "styled-components";
import { TweetProps } from "../../@types";
import { ContentContainer } from "./styles";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export const Content = () => {
  const theme = useTheme();
  const [tweets, setTweets] = useState<TweetProps[]>([]);

  async function getTweetsFromDatabase() {
    const { data: tweets } = await supabase.from("tweets").select("*");
    setTweets(tweets as TweetProps[]);
  }

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
