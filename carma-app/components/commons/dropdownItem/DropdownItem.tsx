import React from "react";
import Image from "next/image";
import { StyledDropdownItem } from "./DropdownItem.styled";

export interface IDropdownItem {
  name: string;
  handleClick: any;
  isActive: boolean;
  img: string;
}
function DropdownItem({ name, handleClick, isActive, img }: IDropdownItem) {
  return (
    <StyledDropdownItem>
      <input type="checkbox" onClick={handleClick} />
      <div>
        <label>{name}</label>
        <Image src={img} alt={name} width={15} height={15} />
      </div>
    </StyledDropdownItem>
  );
}

export default DropdownItem;
