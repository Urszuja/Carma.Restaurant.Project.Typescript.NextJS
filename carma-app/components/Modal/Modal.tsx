import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import {
  StyledModalWrapper,
  StyledModalBody,
  StyledModalHeader,
  StyledModal,
  StyledModalOverlay,
} from "./Modal.styled";

interface IModal {
  show: boolean;
  onClose: any;
  children: any;
}

const Modal = ({ show, onClose, children }: IModal) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const modalWrapperRef = React.useRef<any>();

  const backDropHandler = (e: any) => {
    if (!modalWrapperRef?.current?.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    setIsBrowser(true);

    window.addEventListener("click", backDropHandler);
    return () => window.removeEventListener("click", backDropHandler);
  }, []);

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModalWrapper ref={modalWrapperRef}>
        <StyledModal>
          <StyledModalHeader>
            <Image
              onClick={handleCloseClick}
              src="/FontAwesomeIcons/window-close.svg"
              alt="close"
              width={15}
              height={15}
            />
          </StyledModalHeader>
          <StyledModalBody>{children}</StyledModalBody>
        </StyledModal>
      </StyledModalWrapper>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")!
    );
  } else {
    return null;
  }
};

export default Modal;
