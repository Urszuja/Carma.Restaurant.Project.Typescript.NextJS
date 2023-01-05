import styled from "styled-components";

export const StyledDropdownItem = styled.div`
  background-color: white;
  color: black;
  height: 2em;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;

  .filter-type {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
  }
`;
