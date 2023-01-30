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
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ show, onClose, children }: IModal) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const modalWrapperRef = React.useRef<any>();

  useEffect(() => {
    setIsBrowser(true);
    const backDropHandler = (e: any) => {
      if (!modalWrapperRef?.current?.contains(e.target)) {
        onClose();
      }
    };

    window.addEventListener("click", backDropHandler);
    return () => window.removeEventListener("click", backDropHandler);
  }, []);

  const handleCloseClick = (e: React.MouseEvent<HTMLImageElement>) => {
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
              width={20}
              height={20}
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
