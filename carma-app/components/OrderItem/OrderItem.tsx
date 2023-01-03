import React from "react";

import Image from "next/image";
import { StyledOrderItem } from "../styles/OrderItem.styled";
import { IOrderItem } from "../../model/OrderItem";

function OrderItem({ id, name, size, price, quantity, menu }: IOrderItem) {
  const altSrc = "/FontAwesomeIcons/pizza-slice.svg";
  const imageSrc =
    menu?.find((item) => item.name.toLowerCase() === name)?.image ?? altSrc;

  return (
    <StyledOrderItem id={id}>
      <div className="upper">
        <Image src={imageSrc} alt={name} width={150} height={150} />
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
          <h4>{size}</h4>
        </div>
        <p>{price * quantity} $</p>
      </div>
    </StyledOrderItem>
  );
}

export default OrderItem;
