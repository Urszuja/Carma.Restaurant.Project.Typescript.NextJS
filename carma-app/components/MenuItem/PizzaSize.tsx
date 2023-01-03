import React from "react";
import Image from "next/image";
import { StyledPizzaSize } from "../styles/PizzaSize.styled";

interface IPizzaSize {
  hasCheckbox: boolean;
  size: "small" | "medium" | "large";
  price: number;
}
function PizzaSize({ hasCheckbox, size, price }: IPizzaSize) {
  const iconSize = size === "small" ? 15 : size === "medium" ? 17 : 20;

  const diameter = size === "small" ? 32 : size === "medium" ? 40 : 50;

  return (
    <StyledPizzaSize>
      <div className="size">
        {hasCheckbox && <input type="radio" />}
        <Image
          src="/FontAwesomeIcons/pizza-slice.svg"
          alt={size}
          width={iconSize}
          height={iconSize}
        />
        <p>
          {size} ({diameter} cm)
        </p>
      </div>
      <p>{price} $</p>
    </StyledPizzaSize>
  );
}

export default PizzaSize;
