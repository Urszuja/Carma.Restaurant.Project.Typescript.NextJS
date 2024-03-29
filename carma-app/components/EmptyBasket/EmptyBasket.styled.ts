import styled from "styled-components";

export const StyledEmptyBasket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;

  h3 {
    letter-spacing: 2px;
  }

  a {
    text-decoration: underline;
    font-size: medium;
    color: ${(props) => props.theme.main};
  }
`;
