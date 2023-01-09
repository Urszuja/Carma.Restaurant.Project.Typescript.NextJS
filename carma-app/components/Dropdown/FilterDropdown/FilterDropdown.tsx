import React, { useState, useContext, useEffect, useMemo } from "react";
import DropdownItem from "../../commons/dropdownItem/DropdownItem";
import { DataStoreContext } from "../../DataStoreContext";

function FilterDropdown() {
  const [vegan, setVegan] = useState(false);
  const [spicy, setSpicy] = useState(false);

  const { menu, filteredMenu, setFilter } = useContext(DataStoreContext);

  const filtered = useMemo(() => {
    if (vegan === true) {
      filteredMenu && filteredMenu.filter((item) => item.isVegan === true);
    } else if (spicy === true) {
      filteredMenu && filteredMenu.filter((item) => item.isSpicy === true);
    } else {
      setFilter(menu);
    }
  }, [menu, vegan, spicy]);

  const toggleVegan = () => {
    setVegan((v) => !v);
    setFilter(filtered);
  };

  const toggleSpicy = () => {
    setSpicy((s) => !s);
    setFilter(filtered);
  };

  return (
    <div>
      <DropdownItem name="vegan" handleClick={toggleVegan} />
      <DropdownItem name="spicy" handleClick={toggleSpicy} />
    </div>
  );
}

export default FilterDropdown;
