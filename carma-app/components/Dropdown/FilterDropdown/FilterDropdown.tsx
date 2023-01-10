import React, { useState, useContext, useEffect } from "react";
import { IMenuItem } from "../../../model/MenuItem";
import { DataStoreContext } from "../../DataStoreContext";
import { StyledDropdown } from "../Dropdown.styled";
import FilterDropdownItem from "./FilterDropdownItem";

function FilterDropdown() {
  const [vegan, setVegan] = useState(false);
  const [spicy, setSpicy] = useState(false);
  const { menu, setFilter } = useContext(DataStoreContext);

  useEffect(() => {
    if (vegan || spicy) {
      const copiedMenu: IMenuItem[] = JSON.parse(JSON.stringify(menu));
      let veganMenu: IMenuItem[] = [];
      let spicyMenu: IMenuItem[] = [];
      if (vegan && spicy) {
        spicyMenu = copiedMenu
          .filter((item) => item.isVegan === true)
          .filter((item) => item.isSpicy === true);
      } else if (spicy) {
        spicyMenu = copiedMenu.filter((item) => item.isSpicy === true);
      } else if (vegan) {
        veganMenu = copiedMenu.filter((item) => item.isVegan === true);
      }
      const filteredMenu = [...veganMenu, ...spicyMenu];
      setFilter(filteredMenu);

      return;
    }

    setFilter(menu);
  }, [menu, vegan, spicy]);

  const toggleVegan = () => {
    setVegan((v) => !v);
  };

  const toggleSpicy = () => {
    setSpicy((s) => !s);
  };

  return (
    <StyledDropdown>
      <FilterDropdownItem
        name="vegan"
        handleClick={toggleVegan}
        img="/FontAwesomeIcons/seedling.svg"
      />

      <FilterDropdownItem
        name="spicy"
        handleClick={toggleSpicy}
        img="/FontAwesomeIcons/pepper-hot.svg"
      />
    </StyledDropdown>
  );
}

export default FilterDropdown;
