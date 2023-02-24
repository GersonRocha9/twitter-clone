import { Timeline, TweetPage } from "../pages";

import { Default } from "../layouts";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Timeline />,
      },
      {
        path: "/tweet",
        element: <TweetPage />,
      },
    ],
  },
]);
