import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.danger};
  color: ${(props) => props.theme.main};
  border: none;
  padding: 5px;
  width: 100px;
  text-align: center;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s;
  }
`;
