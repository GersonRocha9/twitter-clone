import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./contexts";
import { router } from "./routes";
import { lightTheme } from "./styles/themes";

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
};
