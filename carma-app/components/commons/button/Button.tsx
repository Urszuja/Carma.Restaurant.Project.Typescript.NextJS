import React from "react";
import { StyledButton } from "../../styles/Button.styled";
interface Button {
  type: "reset" | "submit" | "button";
  text: string;
}

function Button({ type, text }: Button) {
  return <StyledButton type={type}>{text}</StyledButton>;
}

export default Button;
