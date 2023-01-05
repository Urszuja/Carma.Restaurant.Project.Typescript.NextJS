import React from "react";

export interface IDropdownItem {
  name: string;
  handleClick: any;
}
function DropdownItem({ name, handleClick }: IDropdownItem) {
  return <div onClick={handleClick}>{name}</div>;
}

export default DropdownItem;
