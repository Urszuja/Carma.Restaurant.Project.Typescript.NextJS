import styled from "styled-components";

export const StyledOrderList = styled.div`
  color: black;

  .order {
    display: flex;
    background-color: white;
    justify-content: space-between;
    &:nth-child(2n) {
      background-color: yellow;
    }

    .order-items {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }
  }
`;
