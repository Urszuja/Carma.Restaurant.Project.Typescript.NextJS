import React from "react";
import { StyledModal } from "./Modal.styled";

function Modal({ setModal, children }) {
  return (
    <StyledModal>
      <div className="content" onClick={() => setModal(false)}>
        {children}
        <button onClick={() => setModal(false)}>Close modal</button>
      </div>
    </StyledModal>
  );
}
export default Modal;
