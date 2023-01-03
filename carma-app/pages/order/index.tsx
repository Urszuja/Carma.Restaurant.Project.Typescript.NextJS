import React, { useContext } from "react";
import { DataStoreContext } from "../../components/DataStoreContext";
import OrderItem from "../../components/OrderItem/OrderItem";
import Order from "../../components/Order/Order";
import { testOrder } from "../../mockData";

function CartPage({ menuItems }: any) {
  const { clientsData } = useContext(DataStoreContext);
  return (
    <div className="cart-page">
      <div>
        {testOrder.orderItems.map((item) => (
          <OrderItem
            id={item.id}
            name={item.name}
            price={item.price}
            size={item.size}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div>
        <Order />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/menu");
  const menuItems = await res.json();
  return {
    props: {
      menuItems,
    },
  };
}

export default CartPage;
