import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import {
  TweetContainer,
  TweetContent,
  TweetFooter,
  TweetHeader,
  TweetParagraph,
} from "./styles";

import { useState } from "react";
import { TweetProps } from "../../@types";

export const Tweet = ({ id, avatar, name, username, content }: TweetProps) => {
  const [retweets, setRetweets] = useState(Math.floor(Math.random() * 100));
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100));
  const [comments, setComments] = useState(Math.floor(Math.random() * 100));

  function handleRetweet() {
    setRetweets(retweets + 1);
  }

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleComment() {
    setComments(comments + 1);
  }

  return (
    <TweetContainer to={`/tweet/${id}`}>
      <img src={avatar} alt="User avatar" />

      <TweetContent>
        <TweetHeader>
          <strong>{name}</strong>
          <span>{username}</span>
        </TweetHeader>

        <TweetParagraph>{content}</TweetParagraph>

        <TweetFooter>
          <button onClick={handleComment}>
            <ChatCircle size={20} /> {comments}
          </button>
          <button onClick={handleRetweet}>
            <ArrowsClockwise size={20} /> {retweets}
          </button>
          <button onClick={handleLike}>
            <Heart size={20} /> {likes}
          </button>
        </TweetFooter>
      </TweetContent>
    </TweetContainer>
  );
};
