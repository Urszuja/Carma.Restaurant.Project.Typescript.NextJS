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
    </StyledOrderList>
  );
}

export default OrderList;
