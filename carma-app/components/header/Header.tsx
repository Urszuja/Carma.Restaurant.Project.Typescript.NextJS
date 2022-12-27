import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { StyledHeader } from "../styles/Header.styled";
import { ThemeContext } from "styled-components";

import { RESTAURANT_DETAILS } from "../../constants/texts";

function Header() {
  const theme = useContext(ThemeContext);
  console.log(theme);
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
          <Link href="/order/list">Profile</Link>
        </div>
        <div className="link">
          <Link href="/menu">Menu</Link>
        </div>
        <div className="link">
          <Link href="/order">Cart</Link>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
