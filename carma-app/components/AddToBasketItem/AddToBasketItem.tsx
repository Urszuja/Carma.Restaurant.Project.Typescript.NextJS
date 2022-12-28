import React from "react";
import { IMenuItem } from "../../model/MenuItem";
import Image from "next/image";
import { StyledAddToBasketItem } from "../styles/AddToBasketItem.styled";
import PizzaSize from "../MenuItem/PizzaSize";

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
    <StyledAddToBasketItem>
      <div className="upper">
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
        <Image
          src="/FontAwesomeIcons/window-close.svg"
          alt="close"
          width={15}
          height={15}
        />
      </div>
      <div className="middle">
        <Image src={image} alt={name} width={150} height={150} />
        <div className="order">
          <ul className="sizes">
            <PizzaSize hasCheckbox={true} size="small" price={prices[0]} />
            <PizzaSize hasCheckbox={true} size="medium" price={prices[1]} />
            <PizzaSize hasCheckbox={true} size="large" price={prices[2]} />
          </ul>
          <div className="lower">
            <div className="quantity">
              <Image
                src="/FontAwesomeIcons/minus-square.svg"
                alt="minus"
                width={20}
                height={20}
              />
              <div className="number">0</div>
              <Image
                src="/FontAwesomeIcons/plus-square.svg"
                alt="plus"
                width={20}
                height={20}
              />
            </div>
            <Image
              src="/FontAwesomeIcons/cart-plus.svg"
              alt="add to order"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </StyledAddToBasketItem>
  );
}

export default MenuItem;
