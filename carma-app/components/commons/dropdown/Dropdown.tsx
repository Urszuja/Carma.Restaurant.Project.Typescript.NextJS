import React from "react";
import DropdownItem from "./DropdownItem";

function Dropdown() {
  const filterVegan = () => {
    alert("only vegan");
  };
  const filterSpicy = () => {
    alert("only spicy");
  };
  return (
    <div>
      <DropdownItem name="vegan" handleClick={filterVegan} />
      <DropdownItem name="spicy" handleClick={filterSpicy} />
    </div>
  );
}

export default Dropdown;
