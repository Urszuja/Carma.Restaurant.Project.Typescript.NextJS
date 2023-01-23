import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: ${(props) => props.theme.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  color: ${(props) => props.theme.text};
  width: 100%;
  height: 90px;
  top: 0;
  position: fixed;
  z-index: 2;

  @media only screen and (max-width: 600px) {
    .restaurant-name {
      display: none;
    }
  }

  .cart {
    display: flex;
    align-items: center;
    gap: 5px;
    position: relative;
    .order-items {
      background-color: ${(props) => props.theme.danger};
      color: ${(props) => props.theme.background};
      border-radius: 50%;
      height: 15px;
      width: 15px;
      font-size: x-small;
      padding-left: 0.5px;
      text-align: center;
      position: absolute;
      left: 20px;
      bottom: 20px;
    }
  }

  .link-container {
    display: flex;
    justify-content: space-around;
    padding: 20px 20px;
    gap: 10px;
    width: 200px;
  }
  .restaurant-name {
    letter-spacing: 5px;
  }
  .link,
  .logo {
    &:hover {
      cursor: pointer;
    }
  }

  .logo {
    width: 200px;
  }
`;
