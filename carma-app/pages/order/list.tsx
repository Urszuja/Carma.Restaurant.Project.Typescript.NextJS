import React from "react";
import OrderList from "../../components/OrderList/OrderList";

function OrdersList() {
  return (
    <div className="profile-page">
      <h4>Your orders</h4>
      <OrderList />
    </div>
  );
}

export default OrdersList;
