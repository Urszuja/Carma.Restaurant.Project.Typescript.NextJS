import React from "react";
import Link from "next/link";

import OrderItem from "../../components/OrderItem/OrderItem";
import Order from "../../components/Order/Order";
import { testOrder } from "../../mockData";
import Button from "../../components/commons/button/Button";
import { IMenuItem, IMenuItems } from "../../model/MenuItem";

function CartPage({ menuItems }: IMenuItems) {
  const handleClick = () => {};
  return (
    <div className="cart-page">
      <div className="cart-items">
        {testOrder.orderItems.map((item) => (
          <OrderItem
            id={item.id}
            name={item.name}
            price={item.price}
            size={item.size}
            quantity={item.quantity}
            menu={menuItems}
          />
        ))}
      </div>
      <div className="order-display">
        <Order />
        <Link href="/order/final">
          <Button type="button" text="Confirm" onClick={handleClick} />
        </Link>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/menu");
  const menuItems = (await res.json()) as IMenuItem[];
  return {
    props: {
      menuItems,
    },
  };
}

export default CartPage;
