import React from "react";
import Image from "next/image";
import { StyledPizzaSize } from "./PizzaSize.styled";
import { UseFormRegister } from "react-hook-form";
import { IPizzaInput } from "../AddToBasketItem/AddToBasketItem";

interface IPizzaSize {
  hasCheckbox: boolean;
  size: "small" | "medium" | "large";
  price: number;
  register?: UseFormRegister<IPizzaInput>;
}
function PizzaSize({ hasCheckbox, size, price, register }: IPizzaSize) {
  const iconSize = size === "small" ? 15 : size === "medium" ? 17 : 20;
  const val = size[0].toUpperCase();
  const diameter = size === "small" ? 32 : size === "medium" ? 40 : 50;

  return (
    <StyledPizzaSize>
      <div className="size">
        {hasCheckbox && register && (
          <input type="radio" id={size} value={val} {...register("size")} />
        )}
        <Image
          src="/FontAwesomeIcons/pizza-slice.svg"
          alt={size}
          width={iconSize}
          height={iconSize}
        />
        <label htmlFor={size}>
          {size} ({diameter} cm)
        </label>
      </div>
      <p>{price} $</p>
    </StyledPizzaSize>
  );
}

export default PizzaSize;
