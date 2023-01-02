import styled from "styled-components";

const StyledFormInput = styled.div`
  background-color: lightcoral;

  p {
    color: #bf1650;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }
`;

export default StyledFormInput;
