import React, { useState } from "react";
import Image from "next/image";
import Dropdown from "../commons/dropdown/Dropdown";
import { StyledFilter } from "./Filter.styled";

interface IFilter {
  menu: any;
  setMenu: any;
  name: string;
}
function Filter({ name, menu, setMenu }: IFilter) {
  const [isOpen, setOpen] = useState(false);
  const toggleDropdown = () => setOpen((isOpen) => !isOpen);
  return (
    <StyledFilter>
      <div>
        <div className="filter-heading">
          <div className="filter-label">
            <Image
              src="/FontAwesomeIcons/filter.svg"
              alt="filter"
              width={15}
              height={15}
            />
            <p>{name}</p>
          </div>
          <Image
            onClick={toggleDropdown}
            className="toggle"
            src="/FontAwesomeIcons/angle-down.svg"
            alt="arrow-down"
            width={15}
            height={15}
          />
        </div>
      </div>
      {isOpen && <Dropdown menu={menu} setMenu={setMenu} />}
    </StyledFilter>
  );
}

export default Filter;
