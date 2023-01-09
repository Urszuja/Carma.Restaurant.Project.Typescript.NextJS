import React, { useState, useContext } from "react";
import DropdownItem from "../../commons/dropdownItem/DropdownItem";
import { DataStoreContext } from "../../DataStoreContext";

function FilterDropdown() {
  const [vegan, setVegan] = useState(false);
  const [spicy, setSpicy] = useState(false);
  const { menu, filteredMenu, setFilter } = useContext(DataStoreContext);
  console.log("proba", vegan);

  const toggleVegan = () => {
    console.log("before: ", vegan);
    setVegan(!vegan);
    console.log("after: ", vegan);
    if (vegan) {
      const veganMenu =
        filteredMenu && filteredMenu.filter((item) => item.isVegan === true);
      setFilter(veganMenu);
    } else {
      setFilter(menu);
    }
  };

  const toggleSpicy = () => {
    setSpicy((s) => !s);
    alert(spicy);
    if (spicy) {
      const spicyMenu =
        filteredMenu && filteredMenu.filter((item) => item.isSpicy === true);
      setFilter(spicyMenu);
    } else {
      setFilter(menu);
    }
  };

  return (
    <div>
      <DropdownItem name="vegan" handleClick={toggleVegan} />
      <DropdownItem name="spicy" handleClick={toggleSpicy} />
    </div>
  );
}

export default FilterDropdown;
