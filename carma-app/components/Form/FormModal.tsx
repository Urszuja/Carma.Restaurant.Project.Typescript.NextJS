import React from "react";
import Image from "next/image";
import { ORDER_FINAL } from "../../constants/texts";
import { StyledFormModal } from "../styles/FormModal.styles";

function FormModal({ isSuccess }: { isSuccess: boolean }) {
  const response = isSuccess ? ORDER_FINAL.SUCCESS : ORDER_FINAL.FAIL;
  console.log(response);
  const style = isSuccess ? "success" : "danger";
  console.log(style);
  return (
    <StyledFormModal isSuccess>
      <div>
        <div>{response.TEXT1}</div>
        <div>{response.TEXT2}</div>
      </div>
      <div>
        <div>{response.TEXT3}</div>
        <div>{isSuccess && "Here goes timer"}</div>
      </div>
      <div>
        <div>{response.TEXT4}</div>
        <Image
          src="/LogoWithName.svg"
          alt="Carma Logo"
          width={100}
          height={60}
        />
      </div>
    </StyledFormModal>
  );
}

export default FormModal;
