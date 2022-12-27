import React from "react";
import { IMenuItem } from "../../model/MenuItem";
import Image from "next/image";
import { StyledMenuItem } from "../styles/MenuItem.styled";

function MenuItem({
  id,
  name,
  prices,
  image,
  description,
  isVegan,
  isSpicy,
}: IMenuItem) {
  return (
    <StyledMenuItem>
      <div className="name">
        <h4>{name}</h4>
        {isVegan && (
          <Image
            src="/FontAwesomeIcons/seedling.svg"
            alt="vegan"
            width={25}
            height={25}
          />
        )}
        {isSpicy && (
          <Image
            src="/FontAwesomeIcons/pepper-hot.svg"
            alt="vegan"
            width={25}
            height={25}
          />
        )}
      </div>
      <div className="sizes">
        <Image src={image} alt={name} width={100} height={100} />
        <ul>
          <li>S: ${prices[0]} $ </li>
          <li>M: ${prices[0]} $ </li>
          <li>L: ${prices[0]} $ </li>
        </ul>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </StyledMenuItem>
  );
}

export default MenuItem;
