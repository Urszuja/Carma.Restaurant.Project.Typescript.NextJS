import React from "react";
import { IMenuItem } from "../../model/MenuItem";
import Image from "next/image";
import { StyledMiniMenuItem } from "../styles/MiniMenuItem.styled";

function MiniMenuItem({
  id,
  name,
  prices,
  image,
  description,
  isVegan,
  isSpicy,
}: IMenuItem) {
  return (
    <StyledMiniMenuItem>
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
        <p>{prices[0]} $</p>
      </div>
      <div className="middle">
        <Image src={image} alt={name} width={150} height={150} />
        <Image
          src="/FontAwesomeIcons/cart-plus.svg"
          alt="add to order"
          width={30}
          height={30}
        />
      </div>
    </StyledMiniMenuItem>
  );
}

export default MiniMenuItem;
