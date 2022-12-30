import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: ${(props) => props.theme.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: black;

  .linkContainer {
    display: flex;
    justify-content: space-around;
    padding: 20px 20px;
    gap: 10px;
    width: 200px;
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
