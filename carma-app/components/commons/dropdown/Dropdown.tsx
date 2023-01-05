import React from "react";
import DropdownItem from "./DropdownItem";

export interface IDropdown {
  menu: any;
  setMenu: any;
}
function Dropdown({ menu, setMenu }: IDropdown) {
  const filterVegan = () => {
    alert("only vegan");
    const filteredMenu = menu.filter(
      (menuItem: any) => menuItem.isVegan === true
    );
    setMenu(filteredMenu);
  };
  const filterSpicy = () => {
    alert("only spicy");
    const filteredMenu = menu.filter(
      (menuItem: any) => menuItem.isSpicy === true
    );
    setMenu(filteredMenu);
  };

  return (
    <div>
      <DropdownItem name="vegan" handleClick={filterVegan} />
      <DropdownItem name="spicy" handleClick={filterSpicy} />
    </div>
  );
}

export default Dropdown;
