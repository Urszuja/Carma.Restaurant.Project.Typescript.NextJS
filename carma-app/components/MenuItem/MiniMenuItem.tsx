import React, { useState } from "react";
import { IMenuItem } from "../../model/MenuItem";
import Image from "next/image";
import { StyledMiniMenuItem } from "../styles/MiniMenuItem.styled";
import MenuItem from "./MenuItem";

import AddToBasketItem from "../AddToBasketItem/AddToBasketItem";
import Modal from "../Modal/Modal";

function MiniMenuItem({
  id,
  name,
  prices,
  image,
  description,
  isVegan,
  isSpicy,
}: IMenuItem) {
  const [isMenuDetailOpen, setMenuDetail] = useState(true);
  const [isOrderDetailOpen, setOrderDetail] = useState(false);

  console.log(name, isMenuDetailOpen);
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
        <Image
          onClick={() => setMenuDetail(true)}
          src={image}
          alt={name}
          width={150}
          height={150}
        />
        <Image
          onClick={() => console.log("add to cart")}
          src="/FontAwesomeIcons/cart-plus.svg"
          alt="add to order"
          width={30}
          height={30}
        />
      </div>
      {isMenuDetailOpen && (
        <Modal show={isMenuDetailOpen} onClose={() => setMenuDetail(false)}>
          <MenuItem
            name={name}
            id={id}
            prices={prices}
            image={image}
            description={description}
            isSpicy={isSpicy}
            isVegan={isVegan}
          />
        </Modal>
      )}
      {isOrderDetailOpen && (
        <Modal show={isOrderDetailOpen} onClose={() => setOrderDetail(false)}>
          <AddToBasketItem
            name={name}
            id={id}
            prices={prices}
            image={image}
            description={description}
            isSpicy={isSpicy}
            isVegan={isVegan}
          />
        </Modal>
      )}
    </StyledMiniMenuItem>
  );
}

export default MiniMenuItem;
