import React, { useContext } from "react";
import Link from "next/link";

import OrderItem from "../../components/OrderItem/OrderItem";
import Order from "../../components/Order/Order";

import Button from "../../components/commons/Button/Button";
import { IMenuItem, IMenuItems } from "../../model/MenuItem";
import { DataStoreContext } from "../../components/DataStoreContext";
import EmptyBasket from "../../components/EmptyBasket/EmptyBasket";

function CartPage({ menuItems }: IMenuItems) {
  const handleClick = () => {};
  const { cart } = useContext(DataStoreContext);
  return (
    <div className="cart-page">
      {cart!.length > 0 ? (
        <>
          <div className="cart-items">
            {cart!.map((item) => (
              <OrderItem
                key={item.id}
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
        </>
      ) : (
        <EmptyBasket />
      )}
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
