import React from "react";
import Image from "next/image";
import { StyledDropdownItem } from "./DropdownItem.styled";

export interface IDropdownItem {
  name: string;
  handleClick: any;
}
function DropdownItem({ name, handleClick }: IDropdownItem) {
  const imgSrc =
    name === "vegan"
      ? "/FontAwesomeIcons/seedling.svg"
      : "/FontAwesomeIcons/pepper-hot.svg";
  return (
    <StyledDropdownItem>
      <div className="filter-type" onClick={handleClick}>
        {name}
        <Image src={imgSrc} alt={name} width={15} height={15} />
      </div>
      <Image
        src="/FontAwesomeIcons/trash-alt.svg"
        alt="trash"
        width={15}
        height={15}
      />
    </StyledDropdownItem>
  );
}

export default DropdownItem;
