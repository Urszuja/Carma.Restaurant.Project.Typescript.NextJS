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

  .linkContainer {
    display: flex;
    justify-content: space-around;
    padding: 20px 20px;
    gap: 10px;
    width: 200px;
  }
  #restaurantName {
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
