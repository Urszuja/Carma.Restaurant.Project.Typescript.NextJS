import React, { useState } from "react";
import Image from "next/image";
import FilterDropdown from "./FilterDropdown/FilterDropdown";
import { StyledFilter } from "./Filter.styled";

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
            <p>{type}</p>
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
      {isOpen && type === "filter" ? (
        <FilterDropdown />
      ) : (
        <div>here goes sort</div>
      )}
    </StyledFilter>
  );
}

export default Filter;
