import React from "react";

import Image from "next/image";
import { StyledOrderItem } from "../styles/OrderItem.styled";
import { IOrderItem } from "../../model/OrderItem";

function OrderItem({ id, name, size, price, quantity }: IOrderItem) {
  const sizeString = size === 0 ? "S" : size === 1 ? "M" : "L";
  return (
    <StyledOrderItem>
      <div className="upper">
        <Image
          src="/FontAwesomeIcons/pizza-slice.svg"
          alt={name}
          width={150}
          height={150}
        />
        <div className="middle">
          <Image
            src="/FontAwesomeIcons/trash-alt.svg"
            alt="add to order"
            width={30}
            height={30}
          />
          <div className="quantity">
            <Image
              src="/FontAwesomeIcons/minus-square.svg"
              alt="minus"
              width={20}
              height={20}
            />
            <div className="number">{quantity}</div>
            <Image
              src="/FontAwesomeIcons/plus-square.svg"
              alt="plus"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
      <div className="lower">
        <div className="name">
          <h4>{name}</h4>
          <h4>{sizeString}</h4>
        </div>
        <p>{price * quantity} $</p>
      </div>
    </StyledOrderItem>
  );
}

export default OrderItem;
