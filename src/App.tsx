import { AuthProvider, TweetProvider } from "./contexts";

import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { router } from "./routes";
import { lightTheme } from "./styles/themes";

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <AuthProvider>
        <TweetProvider>
          <RouterProvider router={router} />
        </TweetProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
