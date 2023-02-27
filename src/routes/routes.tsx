import { NotFoundPage, Timeline, TweetPage } from "../pages";

import { createBrowserRouter } from "react-router-dom";
import { Default } from "../layouts";

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
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
