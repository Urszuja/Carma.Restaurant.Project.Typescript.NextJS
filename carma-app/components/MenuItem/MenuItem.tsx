import React from "react";
import { IMenuItem } from "../../model/MenuItem";
import Image from "next/image";
import { StyledMenuItem } from "./MenuItem.styled";
import PizzaSize from "./PizzaSize";
import { SIZES } from "../../constants/sizes";

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
        <h3>{name}</h3>
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
          {SIZES.map((size, index) => (
            <PizzaSize
              key={index}
              hasCheckbox={false}
              size={size}
              price={prices[index]}
            />
          ))}
        </ul>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </StyledMenuItem>
  );
}

export default MenuItem;
