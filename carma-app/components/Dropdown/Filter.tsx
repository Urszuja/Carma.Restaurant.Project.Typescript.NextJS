import React, { useState } from "react";
import Image from "next/image";
import FilterDropdown from "./FilterDropdown/FilterDropdown";
import { StyledFilter } from "./Filter.styled";
import SortDropdown from "./SortDropdown/SortDropdown";

interface IFilter {
  type: "filter" | "sort";
}
function Filter({ type }: IFilter) {
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
            <h4>{type}</h4>
          </div>
          <Image
            onClick={toggleDropdown}
            className={isOpen ? "toggle" : ""}
            src="/FontAwesomeIcons/angle-down.svg"
            alt="arrow-down"
            width={15}
            height={15}
          />
        </div>
      </div>
      {isOpen && type === "filter" && <FilterDropdown />}
      {isOpen && type === "sort" && <SortDropdown />}
    </StyledFilter>
  );
}

export default Filter;
