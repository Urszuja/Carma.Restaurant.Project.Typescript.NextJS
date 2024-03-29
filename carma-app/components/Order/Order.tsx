import React, { useContext } from "react";
import Image from "next/image";
import { StyledOrder } from "./Order.styled";
import { DataStoreContext } from "../DataStoreContext";
import { standardDeliveryCost } from "../../mocks/mockData";

function Order() {
  const { cart } = useContext(DataStoreContext);

  const totalPrice =
    cart &&
    cart.reduce(
      (acc, order) => acc + order.price * order.quantity,
      standardDeliveryCost
    );

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
        <div className="order-items">
          <div className="column order-name">
            {cart &&
              cart.map((o) => (
                <div key={`${o.id}-${o.name}`} role="name-display">
                  {o.name}
                </div>
              ))}
          </div>
          <div className="column size-quantity">
            {cart &&
              cart.map((o) => (
                <div key={`${o.id}-${o.size}`}>
                  {o.size} x {o.quantity}
                </div>
              ))}
          </div>
          <div className="column price">
            {cart &&
              cart.map((o) => (
                <div key={`${o.id}-${o.price}`}>{o.price * o.quantity}$</div>
              ))}
          </div>
        </div>
        <div className="delivery">
          <p>Delivery</p>
          <p>{standardDeliveryCost} $</p>
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
