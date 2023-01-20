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
    min-height: calc(100vh - 150px);
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

   @media only screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 20px;
  }

  .cart-items {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px; 
      @media only screen and (max-width: 1000px) {
   align-items: center
  }
  }

  .order-display {
     display: flex;
    width: 40%;
    margin: 0 5%;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 350px;
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

  h3, h2 {
    letter-spacing: 2px;

    a {
      text-decoration: underline;
      
    }
  } 
  

  .cart-image {
    display: none;
  }
 
}

.menu-page, .profile-page {
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .filters {
    display: flex;
    justify-content: flex-start;
    gap: 5px;
   
    margin-right: 25%;

    @media only screen and (max-width: 888px) {
    margin: auto;
  }
  }
  .menu {
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
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
