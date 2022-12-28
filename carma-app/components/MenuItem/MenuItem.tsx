import React from "react";
import { IMenuItem } from "../../model/MenuItem";
import Image from "next/image";
import { StyledMenuItem } from "../styles/MenuItem.styled";
import PizzaSize from "./PizzaSize";

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
            alt="spicy"
            width={25}
            height={25}
          />
        )}
      </div>
      <div className="middle">
        <Image src={image} alt={name} width={100} height={100} />
        <ul className="sizes">
          <PizzaSize hasCheckbox={false} size="small" price={prices[0]} />
          <PizzaSize hasCheckbox={false} size="medium" price={prices[1]} />
          <PizzaSize hasCheckbox={false} size="large" price={prices[2]} />
        </ul>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </StyledMenuItem>
  );
}

export default MenuItem;
