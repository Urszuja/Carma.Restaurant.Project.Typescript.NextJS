import styled from "styled-components";

export const StyledFilter = styled.div`
  .filter-heading {
    background-color: ${(props) => props.theme.main};
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;

    .filter-label {
      display: flex;
      justify-content: flex-start;
      gap: 5px;
      align-items: center;
      color: black;
      margin: 0;

      p {
        margin: 0;
        padding: 0;
      }
    }
    .toggle {
      cursor: pointer;
    }
  }
`;
