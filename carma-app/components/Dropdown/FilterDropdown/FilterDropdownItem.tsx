import React from "react";
import Image from "next/image";
import { StyledDropdownItem } from "../DropdownItem.styled";

export interface IFilterDropdownItem {
  name: string;
  handleClick: any;
  img: string;
  isActive: boolean;
}
function FilterDropdownItem({
  name,
  handleClick,
  img,
  isActive,
}: IFilterDropdownItem) {
  return (
    <StyledDropdownItem isActive={isActive}>
      <input type="checkbox" onClick={handleClick} />
      <div>
        <label>{name}</label>
        <Image src={img} alt={name} width={15} height={15} />
      </div>
    </StyledDropdownItem>
  );
}

export default FilterDropdownItem;
