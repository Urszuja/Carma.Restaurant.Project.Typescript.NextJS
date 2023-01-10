import styled from "styled-components";

interface IStyledDropdownItem {
  isActive: boolean;
}

export const StyledDropdownItem = styled.div`
  background-color: white;
  color: black;
  height: 2em;
  padding: 0.5em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  gap: 5px;

  &:hover {
    cursor: pointer;
  }

  &.active {
    background-color: salmon;
  }
`;
