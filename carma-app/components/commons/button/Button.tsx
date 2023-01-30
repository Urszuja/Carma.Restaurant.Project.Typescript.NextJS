import React from "react";
import { StyledButton } from "./Button.styled";
interface Button {
  type: "reset" | "submit" | "button";
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ type, text, onClick }: Button) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

export default Button;
