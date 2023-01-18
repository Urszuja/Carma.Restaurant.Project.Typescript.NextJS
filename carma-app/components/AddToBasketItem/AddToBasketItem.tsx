import React, { useContext, useState } from "react";
import { IMenuItem } from "../../model/MenuItem";
import Image from "next/image";
import { StyledAddToBasketItem } from "../styles/AddToBasketItem.styled";
import PizzaSize from "../MenuItem/PizzaSize";
import { DataStoreContext } from "../DataStoreContext";
import OrderItemInstance, { Sizes } from "../../model/OrderItem";
import { useForm, SubmitHandler } from "react-hook-form";

export interface IPizzaInput {
  size: Sizes;
}

function MenuItem({
  id,
  name,
  prices,
  image,
  description,
  isVegan,
  isSpicy,
  closeBasket,
}: any) {
  const { cart, setCart } = useContext(DataStoreContext);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState<Sizes>("S");
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((q) => q - 1);
    } else {
      alert("Check your numbers, kiddo");
    }
  };

  const handleIncrease = () => {
    if (quantity < 9) {
      setQuantity((q) => q + 1);
    } else {
      alert("No more pizza for you, fatso!");
    }
  };
  const { register, handleSubmit } = useForm<IPizzaInput>();
  const onSubmit: SubmitHandler<IPizzaInput> = (data) => console.log(data);

  const handleAdd = () => {
    if (cart?.find((p) => p.name === name.toLowerCase() && p.size === size)) {
      cart
        ?.find((p) => p.name === name.toLowerCase() && p.size === size)
        ?.changeQuantity(quantity);
    } else {
      const price =
        size === "S" ? prices[0] : size === "M" ? prices[1] : prices[2];
      const newPizza = new OrderItemInstance(name, size, price, quantity);
      cart?.push(newPizza);
    }
    closeBasket();
  };

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
      </div>
      <div className="middle">
        <Image src={image} alt={name} width={150} height={150} />
        <form className="order" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="sizes">
            <PizzaSize hasCheckbox={true} size="small" price={prices[0]} />
            <PizzaSize hasCheckbox={true} size="medium" price={prices[1]} />
            <PizzaSize hasCheckbox={true} size="large" price={prices[2]} />
          </fieldset>
          <div className="lower">
            <div className="quantity">
              <Image
                onClick={handleDecrease}
                src="/FontAwesomeIcons/minus-square.svg"
                alt="minus"
                width={20}
                height={20}
              />
              <div className="number">{quantity}</div>
              <Image
                onClick={handleIncrease}
                src="/FontAwesomeIcons/plus-square.svg"
                alt="plus"
                width={20}
                height={20}
              />
            </div>
            <button type="submit">
              <Image
                src="/FontAwesomeIcons/cart-plus.svg"
                alt="add to order"
                width={20}
                height={20}
              />
            </button>
          </div>
        </form>
      </div>
    </StyledAddToBasketItem>
  );
}

export default MenuItem;
