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
  tweet: TweetProps;
  comments: TweetProps[];
  getTweetsFromDatabase: () => Promise<void>;
  getTweetFromDatabaseWithId: (id: string) => Promise<void>;
  getCommentsFromDatabaseWithId: (id: string) => Promise<void>;
}
