import React, { useContext } from "react";

import { useRouter } from "next/router";

import { StyledModal } from "./Modal.styled";
import { DataStoreContext } from "../../DataStoreContext";

interface IModal {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccess: boolean;
  children: React.ReactNode;
}

function Modal({ setModal, isSuccess, children }: IModal) {
  const router = useRouter();
  const { setCart } = useContext(DataStoreContext);

  const handleClick = () => {
    setModal(false);

    if (isSuccess) {
      setCart([]);
      //clean local storage
      window.localStorage.clear();
      // redirect

      router.push("/order/list");
    }
  };
  return (
    <StyledModal onClick={handleClick}>
      <div className="content">
        <button onClick={handleClick}>Close modal</button>
        {children}
      </div>
    </StyledModal>
  );
}
export default Modal;
