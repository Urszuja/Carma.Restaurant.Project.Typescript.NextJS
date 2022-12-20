import React, { useContext } from "react";
import Link from "next/link";

function MenuPage({ menuItems }: any) {
  console.log(menuItems);

  return (
    <div>
      <h4>Menu Page</h4>
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
