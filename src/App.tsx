import { Layout, Sidebar } from "./components";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

export const App = () => {
  return (
    <Layout>
      <Sidebar />
      <RouterProvider router={router} />
    </Layout>
  );
};
