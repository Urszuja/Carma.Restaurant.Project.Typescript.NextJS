import React from "react";
import { StyledModal } from "./Modal.styled";

function Modal({ setModal }) {
  return (
    <StyledModal>
      <div>hello from modal</div>
      <button onClick={setModal(false)}>Close modal</button>
    </StyledModal>
  );
}

export default Modal;
