import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { StyledHeader } from "./Header.styled";
import { ThemeContext } from "styled-components";

import { RESTAURANT_DETAILS } from "../../constants/texts";
import { DataStoreContext } from "../DataStoreContext";

function Header() {
  const { cart } = useContext(DataStoreContext);
  const restaurantName = RESTAURANT_DETAILS.NAME.toUpperCase();
  return (
    <StyledHeader>
      <div className="logo">
        <Link href="/">
          <Image
            src="/LogoWithName.svg"
            alt="Carma Logo"
            width={120}
            height={60}
          />
        </Link>
      </div>

      <h1 className="restaurant-name">{restaurantName}</h1>
      <div className="link-container">
        <div className="link">
          <Link href="/order/list">
            <Image
              src="/FontAwesomeIcons/user.svg"
              alt="user"
              width={25}
              height={25}
            />
          </Link>
        </div>
        <div className="link">
          <Link href="/menu">
            <Image
              src="/FontAwesomeIcons/menu.svg"
              alt="menu"
              width={25}
              height={25}
            />
          </Link>
        </div>
        <div className="link cart">
          <Link href="/order">
            <Image
              src="/FontAwesomeIcons/shopping-cart.svg"
              alt="cart"
              width={25}
              height={25}
            />
          </Link>
          {cart!.length > 0 && (
            <div className="order-items">{cart!.length}</div>
          )}
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
