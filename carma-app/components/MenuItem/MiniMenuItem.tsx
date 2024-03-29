import React, { useState } from "react";
import { IMenuItem } from "../../model/MenuItem";
import Image from "next/image";
import { StyledMiniMenuItem } from "./MiniMenuItem.styled";
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
  const [isMenuDetailOpen, setMenuDetail] = useState(false);
  const [isOrderDetailOpen, setOrderDetail] = useState(false);

  const handleShowMenu = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    window.scrollTo(0, 0);
    setMenuDetail(true);
  };

  const handleShowOrder = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    window.scrollTo(0, 0);
    setOrderDetail(true);
  };
  return (
    <StyledMiniMenuItem>
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
            closeBasket={() => setOrderDetail(false)}
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
          onClick={handleShowMenu}
          src={image}
          alt={name}
          width={150}
          height={150}
        />
        <Image
          className="cart-image"
          onClick={handleShowOrder}
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
