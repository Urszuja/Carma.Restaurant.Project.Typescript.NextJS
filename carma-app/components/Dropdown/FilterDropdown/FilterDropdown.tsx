import React, { useState, useContext, useEffect, useMemo } from "react";
import DropdownItem from "../../commons/dropdownItem/DropdownItem";
import { DataStoreContext } from "../../DataStoreContext";

function FilterDropdown() {
  const [vegan, setVegan] = useState(false);
  const [spicy, setSpicy] = useState(false);

  const { menu, setFilter } = useContext(DataStoreContext);

  // v s, v ns, nv s, nv ns
  const filtered = useMemo(() => {
    if (vegan === true) {
      setFilter(
        (filteredMenu) =>
          filteredMenu && filteredMenu.filter((item) => item.isVegan === true)
      );
      if (spicy === true) {
        setFilter(
          (filteredMenu) =>
            filteredMenu && filteredMenu.filter((item) => item.isSpicy === true)
        );
      }
    } else if (spicy === true) {
      setFilter(
        (filteredMenu) =>
          filteredMenu && filteredMenu.filter((item) => item.isSpicy === true)
      );
    } else {
      setFilter(menu);
    }
  }, [menu, vegan, spicy]);

  const toggleVegan = () => {
    setVegan((v) => !v);
    console.log(vegan);
  };

  const toggleSpicy = () => {
    setSpicy((s) => !s);
    console.log(spicy);
  };

  return (
    <div>
      <DropdownItem name="vegan" handleClick={toggleVegan} />
      <DropdownItem name="spicy" handleClick={toggleSpicy} />
    </div>
  );
}

export default FilterDropdown;
