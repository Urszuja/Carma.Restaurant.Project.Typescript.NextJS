import React, { useContext, useEffect, useState } from "react";
import SortDropdownItem from "./SortDropdownItem";
import { IMenuItem } from "../../../model/MenuItem";
import { DataStoreContext } from "../../DataStoreContext";
import { StyledDropdown } from "../Dropdown.styled";

type TSort = "asc" | "desc" | "none";

function SortDropdown() {
  const [sort, setSort] = useState<TSort>("none");
  const { menu, setFilter } = useContext(DataStoreContext);

  const toggle = (arg: TSort) => {
    if (sort === arg) {
      setSort("none");
    } else {
      setSort(arg);
    }
  };

  useEffect(() => {
    if (sort !== "none") {
      const copiedMenu: IMenuItem[] = JSON.parse(JSON.stringify(menu));
      let sortedMenu: IMenuItem[] = [];
      if (sort === "asc") {
        sortedMenu = copiedMenu.sort((a, b) => a.prices[0] - b.prices[0]);
      }
      if (sort === "desc") {
        sortedMenu = copiedMenu.sort((a, b) => b.prices[0] - a.prices[0]);
      }
      setFilter(sortedMenu);
      return;
    }
    setFilter(menu);
  }, [menu, sort]);

  return (
    <StyledDropdown>
      <SortDropdownItem
        name="price"
        handleClick={() => toggle("asc")}
        isActive={sort === "asc"}
        img="/FontAwesomeIcons/arrow-up.svg"
      />

      <SortDropdownItem
        name="price"
        handleClick={() => toggle("desc")}
        isActive={sort === "desc"}
        img="/FontAwesomeIcons/arrow-down.svg"
      />
    </StyledDropdown>
  );
}

export default SortDropdown;
