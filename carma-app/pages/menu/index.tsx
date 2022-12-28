import React, { useContext } from "react";
import Link from "next/link";
import { IMenuItem } from "../../model/MenuItem";
import MenuItem from "../../components/MenuItem/MenuItem";
import AddToBasketItem from "../../components/AddToBasketItem/AddToBasketItem";

function MenuPage({ menuItems }: any) {
  console.log(menuItems);

  return (
    <div>
      <h4>Order now!</h4>
      {menuItems.map((menuItem: IMenuItem) => {
        return (
          <div>
            <MenuItem
              name={menuItem.name}
              id={menuItem.id}
              prices={menuItem.prices}
              image={menuItem.image}
              description={menuItem.description}
              isSpicy={menuItem.isSpicy}
              isVegan={menuItem.isVegan}
            />
            <AddToBasketItem
              name={menuItem.name}
              id={menuItem.id}
              prices={menuItem.prices}
              image={menuItem.image}
              description={menuItem.description}
              isSpicy={menuItem.isSpicy}
              isVegan={menuItem.isVegan}
            />
          </div>
        );
      })}
      <div>
        <p>Go to:</p>
        <ol>
          <li>
            <Link href="/order">Cart</Link>
          </li>
          <li>
            <Link href="/about">About us</Link>
          </li>
        </ol>
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

export default MenuPage;
