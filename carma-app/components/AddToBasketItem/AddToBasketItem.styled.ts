import styled from "styled-components";

export const StyledAddToBasketItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;

  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};

  fieldset {
    border: none;
  }

  button {
    padding: 0;
    margin: 0;
    background-color: inherit;
    border: none;
    cursor: pointer;
  }
  h3 {
    margin: 0;
  }
  .upper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .name {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 15%;
    margin-bottom: 3px;
  }

  .middle {
    display: flex;
    align-items: stretch;
    gap: 20px;

    .order {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 30px;

      .lower {
        display: flex;
        justify-content: center;
        gap: 50px;

        .quantity {
          display: flex;
          align-items: center;
          gap: 10px;

          .number {
            width: 20px;
            height: 20px;
            border: 2px solid ${(props) => props.theme.text};
            border-radius: 3px;
            text-align: center;
            line-height: 15px;
            padding: auto auto;
          }
        }
      }
    }
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      font-size: 70%;
    }
  }
`;
