import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

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
    justify-content: flex-start;
    gap: 50px;
    align-items: center;
  }
`;

export default StyledForm;
