import React from "react";
import { StyledOrderList } from "../styles/OrderList.styled";
import { mockOrders } from "../../mockData";

function OrderList() {
  return (
    <StyledOrderList>
      <div className="label">
        <h4>Date</h4>
        <h4>Order</h4>
        <h4>Status</h4>
      </div>
      <div className="list">
        <div className="time-stamp">
          {mockOrders.map((order) => (
            <div key={order.id}>{order.timeStamp}</div>
          ))}
        </div>
        <div className="order">
          {mockOrders.map((order) => (
            <div className="order" key={order.id}>
              {order.orderItems.map((pizza) => (
                <div id={pizza.id}>{pizza.name}</div>
              ))}
            </div>
          ))}
        </div>
        <div className="status">
          {mockOrders.map((order) => (
            <div key={order.id}>{order.status}</div>
          ))}
        </div>
      </div>
    </StyledOrderList>
  );
}

export default OrderList;
