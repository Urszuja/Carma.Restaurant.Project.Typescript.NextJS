import React, { useContext, useState } from "react";

import Image from "next/image";
import { StyledOrderItem } from "./OrderItem.styled";
import { IOrderItem } from "../../model/OrderItem";
import { DataStoreContext } from "../DataStoreContext";

function OrderItem({ id, name, size, price, quantity, menu }: IOrderItem) {
  const altSrc = "/FontAwesomeIcons/pizza-slice.svg";
  const imageSrc =
    menu?.find((item) => item.name.toLowerCase() === name.toLowerCase())
      ?.image ?? altSrc;

  const { cart, setCart } = useContext(DataStoreContext);
  const pizza = cart!.find((p) => p.id === id);
  const [pizzaAmount, setPizzaAmount] = useState(quantity);

  function handleRemove() {
    if (pizza) {
      alert(`Pizza ${name} of size ${size} removed`);

      setCart((c) => c!.filter((p) => p.id !== id));
    }
  }

  function handleMore() {
    if (pizza!.quantity < 9) {
      setPizzaAmount((am) => am + 1);
      pizza!.increaseQuantity();
      setCart([...cart!]);
    } else {
      alert(
        "Maximum quantity of pizza in given size exceeded. Consider ordering larger pizzas."
      );
    }
  }

  function handleLess() {
    if (pizza!.quantity > 1) {
      setPizzaAmount((am) => am - 1);
      pizza!.decreaseQuantity();
      setCart([...cart!]);
    } else {
      setCart((c) => c!.filter((p) => p.id !== id));
    }
  }
  return (
    <StyledOrderItem id={id}>
      <div className="upper">
        <Image src={imageSrc} alt={name} width={150} height={150} />
        <div className="middle">
          <Image
            onClick={handleRemove}
            src="/FontAwesomeIcons/trash-alt.svg"
            alt="add to order"
            width={30}
            height={30}
          />
          <div className="quantity">
            <Image
              onClick={handleLess}
              src="/FontAwesomeIcons/minus-square.svg"
              alt="minus"
              width={20}
              height={20}
            />
            <div className="number">{pizzaAmount}</div>
            <Image
              onClick={handleMore}
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
