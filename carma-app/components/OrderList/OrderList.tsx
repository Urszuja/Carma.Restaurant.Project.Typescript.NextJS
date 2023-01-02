import React from "react";
import { StyledOrderList } from "../styles/OrderList.styled";
import { mockOrders } from "../../mockData";

function OrderList() {
  return (
    <StyledOrderList>
      {mockOrders.map((order) => (
        <div className="order" key={order.id}>
          <div className="order-items">
            {order.orderItems.map((pizza) => (
              <div id={pizza.id}>{pizza.name}</div>
            ))}
          </div>
          <div> {order.totalPrice}</div>
          <div>{order.status}</div>
        </div>
      ))}
    </StyledOrderList>
  );
}

export default OrderList;
