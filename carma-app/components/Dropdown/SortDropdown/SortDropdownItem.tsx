import React from "react";
import Image from "next/image";
import { StyledDropdownItem } from "../DropdownItem.styled";

export interface ISortDropdownItem {
  name: string;
  handleClick: any;
  img: string;
  isActive: boolean;
}
function SortDropdownItem({
  name,
  handleClick,
  img,
  isActive,
}: ISortDropdownItem) {
  return (
    <StyledDropdownItem>
      <div onClick={handleClick}>
        <label>{name}</label>
        <Image src={img} alt={name} width={15} height={15} />
      </div>
    </StyledDropdownItem>
  );
}

export default SortDropdownItem;
