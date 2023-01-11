import styled from "styled-components";

type IStyledDropdownItem = {
  isActive: boolean;
};

export const StyledDropdownItem = styled.div<IStyledDropdownItem>`
  outline: none;
  background: ${(p) => p.theme.background};
  color: ${(p) => (p.isActive ? p.theme.main : p.theme.text)};
  text-decoration: ${(p) => p.isActive && "underline"};
  box-shadow: inset 0 0 0 2px
    ${(p) => (p.isActive ? p.theme.main : p.theme.background)};
  font-weight: ${(p) => p.isActive && "bold"};
  height: 2em;
  padding: 0.5em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  gap: 5px;

  label {
    width: 50px;
  }
  .label {
    display: flex;

    justify-items: flex-start;
    align-items: center;
    gap: 5px;
  }

  &:hover {
    cursor: pointer;
  }
`;
