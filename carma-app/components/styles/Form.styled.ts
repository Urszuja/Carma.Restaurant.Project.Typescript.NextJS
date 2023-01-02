import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;

  .inputs {
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 10px;
    margin: 5px 5%;
    padding: 10px 10px;
    border: 2px solid ${(props) => props.theme.main};

    .section {
      margin: 10px 0;

      :first-child {
        margin-top: 0;
      }
    }
  }
  .order {
    display: flex;
    width: 40%;
    margin: 0 5%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: ${(props) => props.theme.danger};
      border: none;
      padding: 5px;
      width: 100px;
      text-align: center;
    }

    button:hover {
      transform: scale(1.1);
      transition: transform 0.2s;
    }
  }
`;

export default StyledForm;
