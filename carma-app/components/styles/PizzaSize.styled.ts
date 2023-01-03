import styled from "styled-components";

export const StyledPizzaSize = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5px;
  gap: 30px;
  .size {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
  }

  p {
    margin: 0;
    padding: 3px;
  }

  input {
    background-color: ${(props) => props.theme.background};
  }
`;
