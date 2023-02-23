import { TweetContainer } from "./styles";

interface TweetProps {
  username: string;
  tweet?: string;
  likes?: number;
}

export const Tweet = ({ username, tweet, likes }: TweetProps) => {
  return (
    <TweetContainer>
      <h3>{username}</h3>

      <p>{tweet}</p>

      <p>{likes}</p>
    </TweetContainer>
  );
};
