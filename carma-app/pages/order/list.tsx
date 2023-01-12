import React, { useContext } from "react";
import { DataStoreContext } from "../../components/DataStoreContext";
import OrderList from "../../components/OrderList/OrderList";
import OrderInstance from "../../model/Order";

interface IOrderList {
  orders: OrderInstance[];
}
function OrdersList({ orders }: IOrderList) {
  const { setOrdersDatabase } = useContext(DataStoreContext);
  setOrdersDatabase(orders);
  return (
    <div className="profile-page">
      <h4>Your orders</h4>
      <OrderList />
    </div>
  );
}

export default OrdersList;

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/orderList");
  const orders = (await res.json()) as OrderInstance[];

  return {
    props: {
      orders,
    },
  };
}
