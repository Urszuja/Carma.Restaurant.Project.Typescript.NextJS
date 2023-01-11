import styled from "styled-components";

export const StyledFilter = styled.div`
  .filter-heading {
    background-color: ${(props) => props.theme.main};
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;

    > img {
      cursor: pointer;
    }

    .toggle {
      transform: rotate(0.5turn);
      transition: transform 0.2s ease;
    }

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
  }
`;
