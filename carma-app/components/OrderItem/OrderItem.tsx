import React, { useContext, useState } from "react";

import Image from "next/image";
import { StyledOrderItem } from "../styles/OrderItem.styled";
import { IOrderItem } from "../../model/OrderItem";
import { DataStoreContext } from "../DataStoreContext";

function OrderItem({ id, name, size, price, quantity, menu }: IOrderItem) {
  const altSrc = "/FontAwesomeIcons/pizza-slice.svg";
  const imageSrc =
    menu?.find((item) => item.name.toLowerCase() === name)?.image ?? altSrc;

  const { cart, setCart } = useContext(DataStoreContext);
  const pizza = cart!.find((p) => p.id === id);
  const [pizzaAmount, setPizzaAmount] = useState(quantity);

  function handleRemove() {
    console.log("nice try");
    if (pizza) {
      setCart((c) => c!.splice(cart!.indexOf(pizza) - 1, 1));
    }
  }

  function handleMore() {
    if (pizza!.quantity < 9) {
      setPizzaAmount((am) => am + 1);
      pizza!.increaseQuantity();
      setCart([...cart!, pizza!]);
    }
    console.log("more");
  }

  function handleLess() {
    if (pizza!.quantity > 1) {
      setPizzaAmount((am) => am - 1);
      pizza!.decreaseQuantity();
    }

    console.log("less");
  }

  function handleChange(e: any) {
    e.preventDefault();

    const inputNumber = Math.floor(parseInt(e.target.value));
    if (inputNumber > 0) {
      setPizzaAmount(inputNumber);
      pizza!.changeQuantity(inputNumber);
    }
    console.log("changed to", inputNumber);
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
            <div className="number">
              <input
                id="number"
                type="number"
                value={pizza!.quantity}
                onChange={handleChange}
              />
            </div>
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
