import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import {
  TweetContainer,
  TweetContent,
  TweetFooter,
  TweetHeader,
  TweetParagraph,
} from "./styles";

import { TweetProps } from "../../@types/tweets";

export const Tweet = ({ avatar, name, username, content }: TweetProps) => {
  return (
    <TweetContainer to="/tweet">
      <img src={avatar} alt="User avatar" />

      <TweetContent>
        <TweetHeader>
          <strong>{name}</strong>
          <span>{username}</span>
        </TweetHeader>

        <TweetParagraph>{content}</TweetParagraph>

        <TweetFooter>
          <button>
            <ChatCircle size={20} /> {Math.floor(Math.random() * 100)}
          </button>
          <button>
            <ArrowsClockwise size={20} /> {Math.floor(Math.random() * 100)}
          </button>
          <button>
            <Heart size={20} /> {Math.floor(Math.random() * 100)}
          </button>
        </TweetFooter>
      </TweetContent>
    </TweetContainer>
  );
};
