import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Jockey One', sans-serif;
  position: relative;
  min-height: 100vh;
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

.cart-page {
  margin: 20px;
  display: flex;
  justify-content: space-around;
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
