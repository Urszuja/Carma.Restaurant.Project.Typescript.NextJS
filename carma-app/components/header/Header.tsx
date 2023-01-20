import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { StyledHeader } from "../styles/Header.styled";
import { ThemeContext } from "styled-components";

import { RESTAURANT_DETAILS } from "../../constants/texts";

function Header() {
  const theme = useContext(ThemeContext);
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

      <h1 id="restaurantName">{restaurantName}</h1>
      <div className="linkContainer">
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
        <div className="link">
          <Link href="/order">
            <Image
              src="/FontAwesomeIcons/shopping-cart.svg"
              alt="cart"
              width={25}
              height={25}
            />
          </Link>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
