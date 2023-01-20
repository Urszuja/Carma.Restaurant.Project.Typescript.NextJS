import styled from "styled-components";

const StyledFormInput = styled.div`
  display: flex;
  flex-direction: column;
  input {
    background-color: white;
    color: black;
  }
  label {
    font-size: small;
    margin: 2px 0;
  }
  p {
    color: #bf1650;
    font-size: small;
  }

  p::before {
    margin: 0;
    padding: 0;
    content: "⚠ ";
  }
`;

export default StyledFormInput;
