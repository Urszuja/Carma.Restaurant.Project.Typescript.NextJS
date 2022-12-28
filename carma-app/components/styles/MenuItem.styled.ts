import styled from "styled-components";

export const StyledMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 2px solid ${(props) => props.theme.main};
  border-radius: 5px;
  padding: 10px 10px;

  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};

  h4 {
    margin: 0;
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
    align-items: flex-start;
    gap: 20px;
  }

  .description {
    font-size: 70%;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`;
