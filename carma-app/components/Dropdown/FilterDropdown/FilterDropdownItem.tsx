import React from "react";
import Image from "next/image";
import { StyledDropdownItem } from "../DropdownItem.styled";

export interface IFilterDropdownItem {
  name: string;
  handleClick: any;
  img: string;
}
function FilterDropdownItem({ name, handleClick, img }: IFilterDropdownItem) {
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

export default FilterDropdownItem;
