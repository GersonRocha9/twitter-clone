import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes";
import { router } from "./routes";

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
