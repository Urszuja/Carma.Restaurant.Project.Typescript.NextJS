import React from "react";
import { StyledOrderList } from "../styles/OrderList.styled";
import { mockOrders } from "../../mockData";

function OrderList() {
  return (
    <StyledOrderList>
      <div className="header">
        <h4>Date</h4>
        <h4>Order</h4>
        <h4>Status</h4>
      </div>
      <div className="orders">
        {mockOrders.map((order) => (
          <div key={order.id} className="row">
            <div key={order.id}>{order.timeStamp}</div>
            <div className="order" key={order.id}>
              {order.orderItems.map((pizza) => (
                <div id={pizza.id}>
                  {pizza.name} {pizza.size} x{pizza.quantity}
                </div>
              ))}
            </div>
            <div key={order.id}>{order.status}</div>
          </div>
        ))}
      </div>
    </StyledOrderList>
  );
}

export default OrderList;
