import { FormEvent, useState } from "react";

import { Button } from "../../components";
import { FormContainer } from "./styles";
import { PaperPlaneRight } from "phosphor-react";

interface FormProps {
  placeholder: string;
  imgSrc: string;
  imgAlt: string;
  isAnswer?: boolean;
}

export const Form = ({
  placeholder,
  imgSrc,
  imgAlt,
  isAnswer = false,
}: FormProps) => {
  const [inputContent, setInputContent] = useState("");

  function handleTweet(e: FormEvent) {
    e.preventDefault();
    setInputContent("");
  }

  return (
    <FormContainer isAnswer={isAnswer} onSubmit={handleTweet}>
      <label htmlFor="tweet">
        <img src={imgSrc} alt={imgAlt} />
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
          <Button
            width="80px"
            type="submit"
            label="Answer"
            icon={<PaperPlaneRight size={24} />}
          />
        )}
      </label>

      {!isAnswer && <Button width="120px" type="submit" label="Tweet" />}
    </FormContainer>
  );
};
