import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import {
  TweetContainer,
  TweetContent,
  TweetFooter,
  TweetHeader,
  TweetParagraph,
} from "./styles";

import { useNavigate } from "react-router-dom";

interface TweetProps {
  tweet: {
    imgSrc: string;
    imgAlt: string;
    author: string;
    authorUsername: string;
    content: string;
    comments: number;
    retweets: number;
    likes: number;
  };
}

export const Tweet = ({
  tweet: {
    imgSrc,
    imgAlt,
    author,
    authorUsername,
    content,
    comments,
    retweets,
    likes,
  },
}: TweetProps) => {
  const navigate = useNavigate();

  return (
    <TweetContainer onClick={() => navigate("/tweet")}>
      <img src={imgSrc} alt={imgAlt} />

      <TweetContent>
        <TweetHeader>
          <strong>{author}</strong>
          <span>{authorUsername}</span>
        </TweetHeader>

        <TweetParagraph>{content}</TweetParagraph>

        <TweetFooter>
          <button>
            <ChatCircle size={20} /> {comments}
          </button>
          <button>
            <ArrowsClockwise size={20} /> {retweets}
          </button>
          <button>
            <Heart size={20} /> {likes}
          </button>
        </TweetFooter>
      </TweetContent>
    </TweetContainer>
  );
};
