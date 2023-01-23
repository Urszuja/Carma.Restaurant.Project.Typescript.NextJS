import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 20px 5%;
  position: relative;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    width: 40%;
    min-width: 350px;
    gap: 10px;
    margin: 5px 0;
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
    min-width: 370px;
    margin: 0;

    flex-direction: column;
    justify-content: flex-start;
    gap: 50px;
    align-items: center;
  }
`;

export default StyledForm;
