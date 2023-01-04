import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Jockey One', sans-serif;
  position: relative;
  min-height: 100vh;

  .content {
    padding-top: 90px;
  }
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

  .cart-items {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 5px;
  }

  .order-display {
     display: flex;
    width: 40%;
    margin: 0 5%;
    flex-direction: column;
    justify-content: flex-start;
    gap: 50px;
    align-items: center;
  }
}

.final-page {
  position: relative
}

.home-page {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  img {
    filter: invert(100%);
  }
  h4 {
    letter-spacing: 2px;
  } 

 
}

.menu-page, .profile-page {
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .filters {
    align-self: base-line;
  }
  .menu {
    display: flex;
    flex-flow: wrap;
    width: 50%; 
  }
}

 .restaurant-description {
    text-align: center;
    width: 50%;
    min-width: 200px;
    margin: 10px 0;
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
