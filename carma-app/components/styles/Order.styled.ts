import styled from "styled-components";

export const StyledOrder = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.text};
  padding: 5px;
  .title {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    align-items: center;
  }
  ul {
    text-decoration: none;
    margin: 0;
    padding: 0;
    li {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-between;
    }
  }
  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  hr {
    background-color: ${(props) => props.theme.text};
    size: 10px;
    width: 80%;
    border: 1px solid ${(props) => props.theme.text};
  }
`;
