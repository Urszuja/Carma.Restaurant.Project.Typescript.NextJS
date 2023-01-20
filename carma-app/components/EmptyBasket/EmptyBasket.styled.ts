import styled from "styled-components";

export const StyledEmptyBasket = styled.div`
  height: 300px;

  a {
    text-decoration: underline;
    color: ${(props) => props.theme.main};
  }
`;
