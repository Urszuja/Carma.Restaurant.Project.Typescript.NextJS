import styled from "styled-components";

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

  .active {
    color: yellow;
    box-shadow: 0 0 2px 1px #0ff;
    width: 100%;
  }
`;
