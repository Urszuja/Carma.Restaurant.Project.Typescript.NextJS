import styled from "styled-components";

export const StyledMiniMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 210px;
  border: 2px solid ${(props) => props.theme.main};
  border-radius: 5px;
  padding: 10px;
  margin: 5px;

  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};

  h4 {
    margin: 0;
  }
  .upper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      margin: 0;
      padding: 0;
      font-weight: bold;
    }
  }

  .name {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 15%;
    margin-bottom: 3px;
  }

  .middle {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      cursor: pointer;
    }
  }
`;
