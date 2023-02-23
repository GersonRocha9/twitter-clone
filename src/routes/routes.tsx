import { Timeline, TweetPage } from "../pages";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Timeline />,
  },
  {
    path: "/tweet",
    element: <TweetPage />,
  },
]);
