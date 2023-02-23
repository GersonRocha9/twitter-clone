import { Sparkle } from "phosphor-react";
import { Button } from "../Button";
import { ContentContainer } from "./styles";

export const Content = () => {
  return (
    <ContentContainer>
      <header>
        Home
        <Sparkle size={24} color="#1da1f2" />
      </header>

      <form>
        <label htmlFor="tweet">
          <img
            src="https://avatars.githubusercontent.com/u/38770302?v=4"
            alt="User Avatar"
          />
          <textarea id="tweet" placeholder="What's happening?" />
        </label>

        <Button width="120px" type="submit" label="Tweet" />
      </form>

      <div className="separator" />
    </ContentContainer>
  );
};

// TODO: Componentizar o header, form e o separator
