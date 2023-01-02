import styled from "styled-components";

export const StyledOrderList = styled.div`
  background-color: white;
  color: black;

  .order {
    display: flex;
    justify-content: space-between;

    .order-items {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }
  }
`;
