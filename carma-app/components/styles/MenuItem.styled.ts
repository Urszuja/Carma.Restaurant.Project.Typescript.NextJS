import styled from "styled-components";

export const StyledMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  border: 2px solid ${(props) => props.theme.main};
  border-radius: 5px;
  padding: 10px 10px;

  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};

  .name {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .sizes {
    display: flex;
    justify-content: space-between;
  }

  .description {
    font-size: 70%;
  }
`;
