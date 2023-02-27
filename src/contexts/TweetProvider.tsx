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

  async function getTweetsFromDatabase() {
    const { data: tweets } = await supabase.from("tweets").select("*");

    tweets?.sort((a, b) => {
      return (
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    });

    setTweets(tweets as TweetProps[]);
  }

  return (
    <TweetContext.Provider
      value={{
        tweets,
        getTweetsFromDatabase,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
