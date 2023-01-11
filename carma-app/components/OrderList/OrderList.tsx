import React, { useContext } from "react";
import { StyledOrderList } from "../styles/OrderList.styled";

import { DataStoreContext } from "../DataStoreContext";

function OrderList() {
  const { ordersDatabase } = useContext(DataStoreContext);
  return (
    <StyledOrderList>
      <div className="header">
        <h4>Date</h4>
        <h4>Order</h4>
        <h4>Status</h4>
      </div>
      <div className="orders">
        {ordersDatabase &&
          ordersDatabase.map((order) => (
            <div key={order.id} className="row">
              <div>{order.timeStamp}</div>
              <div className="order" key={order.id}>
                {order.orderItems.map((pizza) => (
                  <div key={pizza.id}>
                    {pizza.name} {pizza.size} x{pizza.quantity}
                  </div>
                ))}
              </div>
              <div>{order.status}</div>
            </div>
          ))}
      </div>
    </StyledOrderList>
  );
}

export default OrderList;
