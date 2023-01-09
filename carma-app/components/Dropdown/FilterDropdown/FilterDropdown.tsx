import React, { useState, useContext, useEffect, useMemo } from "react";
import DropdownItem from "../../commons/dropdownItem/DropdownItem";
import { DataStoreContext } from "../../DataStoreContext";
import { StyledDropdown } from "../Dropdown.styled";

function FilterDropdown() {
  const [vegan, setVegan] = useState(false);
  const [spicy, setSpicy] = useState(false);
  const { menu, setFilter } = useContext(DataStoreContext);

  useMemo(() => {
    setFilter(menu);
    if (vegan === true && spicy === true) {
      setFilter(
        (filteredMenu) =>
          filteredMenu && filteredMenu.filter((item) => item.isSpicy === true)
      );
      setFilter(
        (filteredMenu) =>
          filteredMenu && filteredMenu.filter((item) => item.isVegan === true)
      );
    } else if (vegan === true) {
      setFilter(
        (filteredMenu) =>
          filteredMenu && filteredMenu.filter((item) => item.isVegan === true)
      );
    } else if (spicy === true) {
      setFilter(
        (filteredMenu) =>
          filteredMenu && filteredMenu.filter((item) => item.isSpicy === true)
      );
    }
  }, [menu, vegan, spicy]);

  const toggleVegan = () => {
    setVegan((v) => !v);
  };

  const toggleSpicy = () => {
    setSpicy((s) => !s);
  };

  return (
    <StyledDropdown>
      <DropdownItem name="vegan" handleClick={toggleVegan} isActive={vegan} />

      <DropdownItem name="spicy" handleClick={toggleSpicy} isActive={spicy} />
    </StyledDropdown>
  );
}

export default FilterDropdown;
