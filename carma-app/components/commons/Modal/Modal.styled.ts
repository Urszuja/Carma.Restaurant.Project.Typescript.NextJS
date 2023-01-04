import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  .content {
    position: fixed;
    top: 30%;
    left: 50%;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    transform: translate(-50%, -50%);
  }
`;
