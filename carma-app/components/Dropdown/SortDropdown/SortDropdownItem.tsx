import React, { useEffect } from "react";
import Image from "next/image";
import { StyledDropdownItem } from "../DropdownItem.styled";

export interface ISortDropdownItem {
  name: string;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
  img: string;
  isActive: boolean;
}
function SortDropdownItem({
  name,
  handleClick,
  img,
  isActive,
}: ISortDropdownItem) {
  const yellowImg = img.slice(0, -4) + "-yellow.svg";
  console.log(yellowImg);

  return (
    <StyledDropdownItem isActive={isActive}>
      <div onClick={handleClick} className="label">
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

export default SortDropdownItem;
