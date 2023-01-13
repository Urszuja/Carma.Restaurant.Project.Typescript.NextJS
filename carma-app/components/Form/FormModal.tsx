import React from "react";
import Image from "next/image";
import { ORDER_FINAL } from "../../constants/texts";
import { StyledFormModal } from "./FormModal.styled";

export interface IFormModal {
  isSuccess: boolean;
}

function FormModal({ isSuccess }: IFormModal) {
  const information = isSuccess ? ORDER_FINAL.SUCCESS : ORDER_FINAL.FAIL;

  return (
    <StyledFormModal isSuccess={isSuccess}>
      <div>{information.TEXT1}</div>
      <div>{information.TEXT2}</div>
      <div>{information.TEXT3}</div>
      <div className="advertisement">
        <div>{information.TEXT4}</div>
        <Image
          src="/LogoWithName.svg"
          alt="Carma Logo"
          width={100}
          height={40}
        />
      </div>
    </StyledFormModal>
  );
}

export default FormModal;
