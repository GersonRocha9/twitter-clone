import { FormEvent, useContext, useState } from "react";

import { createClient } from "@supabase/supabase-js";
import { AuthContextData } from "../../@types";
import { TweetButton } from "../../components";
import { AuthContext } from "../../contexts";
import { FormContainer } from "./styles";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

interface FormProps {
  placeholder: string;
  isAnswer?: boolean;
}

export const Form = ({ placeholder, isAnswer = false }: FormProps) => {
  const [inputContent, setInputContent] = useState("");
  const { user, isLogged } = useContext(AuthContext) as AuthContextData;

  async function handleTweet(e: FormEvent) {
    e.preventDefault();

    await supabase.from("tweets").insert({
      name: user?.user_metadata.full_name,
      username: user?.user_metadata.email,
      content: inputContent,
      avatar: user?.user_metadata.avatar_url,
    });

    setInputContent("");
  }

  return (
    <>
      {isLogged ? (
        <FormContainer isAnswer={isAnswer} onSubmit={handleTweet}>
          <label htmlFor="tweet">
            <img
              src={user?.user_metadata.avatar_url}
              alt="User profile photo"
            />
            <textarea
              id="tweet"
              placeholder={placeholder}
              value={inputContent}
              onChange={(e) => setInputContent(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                  e.preventDefault();
                  handleTweet(e);
                }
              }}
            />

            {isAnswer && (
              <TweetButton width="120px" type="submit" label="Answer" />
            )}
          </label>

          {!isAnswer && (
            <TweetButton width="120px" type="submit" label="Tweet" />
          )}
        </FormContainer>
      ) : (
        <p
          style={{
            padding: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            fontWeight: 600,
          }}
        >
          Faça login para tweetar
        </p>
      )}
    </>
  );
};
