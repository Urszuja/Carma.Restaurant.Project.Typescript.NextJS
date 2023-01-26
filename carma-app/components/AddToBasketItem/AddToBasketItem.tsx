import React, { useContext, useState } from "react";
import Image from "next/image";
import { StyledAddToBasketItem } from "./AddToBasketItem.styled";
import PizzaSize from "../MenuItem/PizzaSize";
import { DataStoreContext } from "../DataStoreContext";
import OrderItemInstance, {
  increaseQuantity,
  Sizes,
} from "../../model/OrderItem";
import { useForm, SubmitHandler } from "react-hook-form";
import { IMenuItem } from "../../model/MenuItem";
import { SIZES } from "../../constants/sizes";

export interface IPizzaInput {
  size: Sizes;
}

export interface IAddToBasket extends IMenuItem {
  closeBasket: any;
}

function AddToBasketItem({
  id,
  name,
  prices,
  image,
  description,
  isVegan,
  isSpicy,
  closeBasket,
}: IAddToBasket) {
  const { cart, setCart } = useContext(DataStoreContext);
  const [quantity, setQuantity] = useState(1);

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

  const onSubmit: SubmitHandler<IPizzaInput> = (data) => {
    const size = data.size;
    if (!size) {
      alert("Pick pizza size");
      return;
    }
    if (cart!.length < 10) {
      const foundItem = cart?.find(
        (p) => p.name.toLowerCase() === name.toLowerCase() && p.size === size
      );
      if (foundItem) {
        increaseQuantity(foundItem, quantity);
      } else {
        const price =
          size === "S" ? prices[0] : size === "M" ? prices[1] : prices[2];
        const newPizza = new OrderItemInstance(name, size, price, quantity);
        setCart([...cart!, newPizza]);
      }
    } else {
      alert("Place new order to buy more pizza");
    }
    closeBasket();
  };

  return (
    <StyledAddToBasketItem>
      <div className="upper">
        <div className="name">
          <h3>{name}</h3>
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
            {SIZES.map((size, index: number) => (
              <PizzaSize
                key={index}
                hasCheckbox={true}
                size={size}
                price={prices[index]}
                register={register}
              />
            ))}
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
                width={40}
                height={40}
              />
            </button>
          </div>
        </form>
      </div>
    </StyledAddToBasketItem>
  );
}

export default AddToBasketItem;
