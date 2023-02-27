export interface TweetProps {
  id?: string;
  createdAt?: string;
  name: string;
  username: string;
  content: string;
  avatar: string;
}

export interface TweetContextData {
  tweets: TweetProps[];
  getTweetsFromDatabase: () => Promise<void>;
}
