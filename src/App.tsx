import { AuthProvider, TweetProvider } from "./contexts";

import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { router } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import { lightTheme } from "./styles/themes";

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <AuthProvider>
        <TweetProvider>
          <GlobalStyles />
          <RouterProvider router={router} />
        </TweetProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
