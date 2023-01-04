import React from "react";
import { StyledModal } from "./Modal.styled";

function Modal({ setModal, children }) {
  return (
    <StyledModal onClick={() => setModal(false)}>
      <div className="content">
        <button onClick={() => setModal(false)}>Close modal</button>
        {children}
      </div>
    </StyledModal>
  );
}
export default Modal;
