import React from "react";
import { StyledEmptyBasket } from "./EmptyBasket.styled";
import Link from "next/link";

function EmptyBasket() {
  return (
    <StyledEmptyBasket>
      <h3>Our pizza is delicious. Check, if you don't trust Carma. </h3>
      <h1> We do.</h1>
      <Link href="/menu">
        <h3>Go to menu and order some pizza.</h3>
      </Link>
    </StyledEmptyBasket>
  );
}

export default EmptyBasket;
