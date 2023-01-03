import React, { useContext } from "react";
import Image from "next/image";
import { StyledOrder } from "../styles/Order.styled";
import { DataStoreContext } from "../DataStoreContext";
import { deliveryCost } from "../../mockData";

function Order() {
  const { cart } = useContext(DataStoreContext);
  const orders = cart?.orderItems;
  const totalPrice = orders?.reduce(
    (acc, order) => acc + order.price * order.quantity,
    deliveryCost
  );
  console.log(totalPrice);

  return (
    <StyledOrder>
      <div>
        <div className="title">
          <Image
            src="/FontAwesomeIcons/shopping-cart.svg"
            alt="cart"
            width={25}
            height={25}
          />
          <h4>Your Order:</h4>
        </div>
        <ul className="orders">
          {orders &&
            orders.map((o) => (
              <li className="order">
                <p>{o.name}</p>
                <p>
                  {o.size} x{o.quantity}
                </p>
                <p>{o.quantity * o.price}$</p>
              </li>
            ))}
        </ul>
        <div className="delivery">
          <p>Delivery</p>
          <p>{deliveryCost} $</p>
        </div>
        <hr />
        <div className="total">
          <p>Total:</p>
          <p>{totalPrice} $</p>
        </div>
      </div>
    </StyledOrder>
  );
}

export default Order;