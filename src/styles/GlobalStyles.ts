import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: #0f1419;
  -webkit-font-smoothing: antialiased;
}

body,
input,
textarea,
button {
  font: 400 1rem "Roboto", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`;