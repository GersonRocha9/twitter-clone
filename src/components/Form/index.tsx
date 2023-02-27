import { FormEvent, useContext, useState } from "react";
import { AuthContextData, TweetContextData } from "../../@types";
import { AuthContext, TweetContext } from "../../contexts";

import { createClient } from "@supabase/supabase-js";
import { useParams } from "react-router-dom";
import { TweetButton } from "../../components";
import { FormContainer } from "./styles";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  placeholder: string;
  isAnswer?: boolean;
}

export const Form = ({
  placeholder,
  isAnswer = false,

  ...props
}: FormProps) => {
  const { id } = useParams();
  const [inputContent, setInputContent] = useState("");
  const { user, isLogged } = useContext(AuthContext) as AuthContextData;
  const { getTweetsFromDatabase, getCommentsFromDatabaseWithId } = useContext(
    TweetContext
  ) as TweetContextData;

  async function handleTweet(e: FormEvent) {
    e.preventDefault();

    await supabase.from("tweets").insert({
      name: user?.user_metadata.full_name,
      username: user?.user_metadata.email,
      content: inputContent,
      avatar: user?.user_metadata.avatar_url,
    });

    getTweetsFromDatabase();
    setInputContent("");
  }

  async function handleAnswer(e: FormEvent) {
    e.preventDefault();

    await supabase.from("comments").insert({
      name: user?.user_metadata.full_name,
      username: user?.user_metadata.email,
      content: inputContent,
      avatar: user?.user_metadata.avatar_url,
      tweet_id: id,
    });

    setInputContent("");
    getCommentsFromDatabaseWithId(id as string);
  }

  return isLogged ? (
    <FormContainer
      isAnswer={isAnswer}
      onSubmit={isAnswer ? handleAnswer : handleTweet}
      {...props}
    >
      <label htmlFor="tweet">
        <img src={user?.user_metadata.avatar_url} alt="User profile photo" />
        <textarea
          id="tweet"
          placeholder={placeholder}
          value={inputContent}
          onChange={(e) => setInputContent(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
              e.preventDefault();
              isAnswer ? handleAnswer(e) : handleTweet(e);
            }
          }}
        />

        {isAnswer && <TweetButton width="120px" type="submit" label="Answer" />}
      </label>

      {!isAnswer && <TweetButton width="120px" type="submit" label="Tweet" />}
    </FormContainer>
  ) : null;
};
