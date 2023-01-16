import styled from "styled-components";

export const StyledOrderItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  border: 2px solid ${(props) => props.theme.main};
  border-radius: 5px;
  padding: 10px 10px;

  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};

  img {
    cursor: pointer;
  }

  h4 {
    margin: 0;
  }
  .upper {
    display: flex;
    justify-content: flex-start;

    .middle {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin-left: 10px;

      .quantity {
        display: flex;
        flex-direction: column-reverse;
        gap: 5px;

        .number {
          /* Chrome, Safari, Edge, Opera */
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* Firefox */
          input[type="number"] {
            -moz-appearance: textfield;
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
  }
  .lower {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      margin: 0;
      padding: 0;
      font-weight: bold;
    }
  }

  .name {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 15%;
    margin-bottom: 3px;
  }
`;
