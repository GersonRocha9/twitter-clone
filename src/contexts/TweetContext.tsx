import { ReactNode, createContext, useState } from "react";

import { createClient } from "@supabase/supabase-js";
import { TweetProps } from "../@types";

export const TweetContext = createContext({});

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

interface TweetProviderProps {
  children: ReactNode;
}

export const TweetProvider = ({ children }: TweetProviderProps) => {
  const [tweets, setTweets] = useState<TweetProps[]>([]);
  const [comments, setComments] = useState<TweetProps[]>([]);
  const [tweet, setTweet] = useState({} as TweetProps);

  async function getTweetsFromDatabase() {
    const { data: tweets } = await supabase.from("tweets").select("*");

    tweets?.sort((a, b) => {
      return (
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    });

    setTweets(tweets as TweetProps[]);
  }

  async function getTweetFromDatabaseWithId(id: string) {
    const { data: tweet } = await supabase
      .from("tweets")
      .select("*")
      .eq("id", id);

    setTweet(tweet![0] as TweetProps);
  }

  async function getCommentsFromDatabaseWithId(id: string) {
    const { data: comments } = await supabase
      .from("comments")
      .select("*")
      .eq("tweet_id", id);

    comments?.sort((a, b) => {
      return (
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    });

    setComments(comments as TweetProps[]);
  }

  return (
    <TweetContext.Provider
      value={{
        tweets,
        tweet,
        comments,
        getTweetsFromDatabase,
        getTweetFromDatabaseWithId,
        getCommentsFromDatabaseWithId,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
