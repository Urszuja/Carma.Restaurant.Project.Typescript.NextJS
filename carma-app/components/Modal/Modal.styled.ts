import styled from "styled-components";

export const StyledModalWrapper = styled.div`
  width: 500px;
`;

export const StyledModalBody = styled.div`
  padding-top: 0;
  margin-top: 0;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
  margin-bottom: 0;
  padding-bottom: 0;
`;

export const StyledModal = styled.div`
  background: white;
  color: black;
  width: 500px;
  border-radius: 15px;
  padding: 15px;
`;
export const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
