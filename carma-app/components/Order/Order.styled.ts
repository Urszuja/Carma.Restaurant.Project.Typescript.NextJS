import styled from "styled-components";

export const StyledOrder = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.text};
  min-width: 300px;
  max-height: 500px;
  padding: 5px;

  .title {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    align-items: center;
    margin: 5px 0 10px 0;

    h4 {
      margin: 0;
    }
  }

  .order-items {
    display: flex;
    justify-content: space-between;

    .column div {
      margin: 10px 0;
    }

    .size-quantity,
    .price {
      text-align: end;
    }
  }
  .total,
  .delivery {
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
