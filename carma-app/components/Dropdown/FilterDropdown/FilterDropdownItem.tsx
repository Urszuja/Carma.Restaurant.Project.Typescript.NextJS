import React from "react";
import Image from "next/image";
import { StyledDropdownItem } from "../DropdownItem.styled";

export interface IFilterDropdownItem {
  name: string;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
  img: string;
  isActive: boolean;
}
function FilterDropdownItem({
  name,
  handleClick,
  img,
  isActive,
}: IFilterDropdownItem) {
  const yellowImg = img.slice(0, -4) + "-yellow.svg";
  return (
    <StyledDropdownItem isActive={isActive}>
      <input type="checkbox" onClick={handleClick} />
      <div className="label">
        <h4 role="option">{name}</h4>
        <Image
          src={isActive ? yellowImg : img}
          alt={name}
          width={15}
          height={15}
        />
      </div>
    </StyledDropdownItem>
  );
}

export default FilterDropdownItem;
