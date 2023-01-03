import styled from "styled-components";

export const StyledOrderList = styled.div`
  color: black;
  background-color: white;
  display: flex;
  flex-direction: column;
  .label {
    background-color: yellow;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
  }
  .list {
    display: flex;
    justify-content: space-between;
    padding: 0 15px;

    .time-stamp {
      div:nth-child(2n) {
        background-color: gray;
      }
    }
  }
`;
