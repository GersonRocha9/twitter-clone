import { User, createClient } from "@supabase/supabase-js";
import { FormEvent, useEffect, useState } from "react";

import { TweetButton } from "../../components";
import { FormContainer } from "./styles";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

interface FormProps {
  placeholder: string;
  isAnswer?: boolean;
}

interface UserProps {
  user: User;
}

export const Form = ({ placeholder, isAnswer = false }: FormProps) => {
  const [inputContent, setInputContent] = useState("");
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    const user = localStorage.getItem("sb-xxtuntovsqwoctyaevjq-auth-token");

    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  async function handleTweet(e: FormEvent) {
    e.preventDefault();

    await supabase.from("tweets").insert({
      name: user?.user?.user_metadata.full_name,
      username: user?.user?.user_metadata.email,
      content: inputContent,
      avatar: user?.user?.user_metadata.avatar_url,
    });

    setInputContent("");
  }

  return (
    <FormContainer isAnswer={isAnswer} onSubmit={handleTweet}>
      <label htmlFor="tweet">
        <img
          src={user?.user?.user_metadata.avatar_url}
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

        {isAnswer && <TweetButton width="120px" type="submit" label="Answer" />}
      </label>

      {!isAnswer && <TweetButton width="120px" type="submit" label="Tweet" />}
    </FormContainer>
  );
};
