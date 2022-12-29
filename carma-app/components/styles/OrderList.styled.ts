import styled from "styled-components";

export const StyledOrderList = styled.div`
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
    }
  }
  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
