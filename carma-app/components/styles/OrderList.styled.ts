import styled from "styled-components";

export const StyledOrderList = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  margin: 10px auto;
  width: 50%;
  .header,
  .row,
  .order {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 2px 25px;
  }

  .header {
    background-color: ${(props) => props.theme.main};
  }

  .orders {
    display: flex;
    flex-direction: column;
  }
  .row:nth-child(2n) {
    background-color: lightgray;
  }
`;
