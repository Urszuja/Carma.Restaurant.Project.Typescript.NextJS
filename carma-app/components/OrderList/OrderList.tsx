import React, { useContext } from "react";
import Image from "next/image";
import { StyledOrderList } from "../styles/OrderList.styled";
import { DataStoreContext } from "../DataStoreContext";
import { deliveryCost } from "../../mockData";

function OrderList() {
  const { cart } = useContext(DataStoreContext);
  const orders = cart?.orderItems;
  const totalPrice = orders?.reduce(
    (acc, order) => acc + order.price * order.quantity,
    deliveryCost
  );
  console.log(totalPrice);

  return (
    <StyledOrderList>
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
              {o.name} - {o.size} - {o.quantity} - {o.quantity * o.price}
            </li>
          ))}
      </ul>
      <hr />
      <div className="total">
        <p>Total:</p>
        <p>{totalPrice} $</p>
      </div>
    </StyledOrderList>
  );
}

export default OrderList;
