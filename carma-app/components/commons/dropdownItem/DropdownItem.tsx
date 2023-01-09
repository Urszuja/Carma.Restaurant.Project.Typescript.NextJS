import React from "react";
import Image from "next/image";
import { StyledDropdownItem } from "./DropdownItem.styled";

export interface IDropdownItem {
  name: string;
  handleClick: any;
  isActive: boolean;
}
function DropdownItem({ name, handleClick, isActive }: IDropdownItem) {
  const imgSrc =
    name === "vegan"
      ? "/FontAwesomeIcons/seedling.svg"
      : "/FontAwesomeIcons/pepper-hot.svg";

  return (
    <StyledDropdownItem>
      <div onClick={handleClick} className={isActive ? "active" : ""}>
        {name}
        <Image src={imgSrc} alt={name} width={15} height={15} />
      </div>
    </StyledDropdownItem>
  );
}

export default DropdownItem;
