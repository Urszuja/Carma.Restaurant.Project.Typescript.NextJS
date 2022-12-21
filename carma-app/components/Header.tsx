import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { StyledHeader } from "./styles/Header.styled";
import { ThemeContext } from "styled-components";

function Header() {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <StyledHeader>
      <div className="logo">
        <Link href="/">
          <Image
            src="/LogoWithName.svg"
            alt="Carma Logo"
            width={100}
            height={80}
          />
        </Link>
      </div>

      <h1 id="restaurantName">Carma</h1>
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
