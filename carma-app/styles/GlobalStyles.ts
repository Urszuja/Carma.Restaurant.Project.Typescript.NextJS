import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`html,
body {
  padding: 0;
  margin: 0;
  height: 100vh;
  font-family: 'Jockey One', sans-serif;
}

body {
  display: flex;
  flex-direction: column;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}



@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: white;
    background: black;
  }
}
`;

export default GlobalStyles;
