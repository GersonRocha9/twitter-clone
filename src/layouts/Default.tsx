import { Layout, Sidebar } from "../components";

import { Outlet } from "react-router-dom";

export const Default = () => {
  return (
    <Layout>
      <Sidebar />
      <Outlet />
    </Layout>
  );
};
