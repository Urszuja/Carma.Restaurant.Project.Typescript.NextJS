import React from "react";
import { StyledButton } from "./Button.styled";
interface Button {
  type: "reset" | "submit" | "button";
  text: string;
  onClick: any;
}

function Button({ type, text, onClick }: Button) {
  return <StyledButton type={type}>{text}</StyledButton>;
}

export default Button;
