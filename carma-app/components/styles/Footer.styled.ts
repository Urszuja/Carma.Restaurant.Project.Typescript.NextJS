import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: ${(props) => props.theme.text};
`;
