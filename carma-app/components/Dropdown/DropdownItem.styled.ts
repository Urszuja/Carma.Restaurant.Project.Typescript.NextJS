import styled from "styled-components";

type IStyledDropdownItem = {
  isActive: boolean;
};

export const StyledDropdownItem = styled.div<IStyledDropdownItem>`
  background-color: ${(p) => (p.isActive ? "green" : "white")};

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
`;
