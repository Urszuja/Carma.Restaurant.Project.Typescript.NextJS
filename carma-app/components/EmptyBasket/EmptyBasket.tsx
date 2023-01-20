import React from "react";
import { StyledEmptyBasket } from "./EmptyBasket.styled";
import Link from "next/link";

function EmptyBasket() {
  return (
    <StyledEmptyBasket>
      <h2>Our pizza is delicious. Check, if you don't trust Carma. We do.</h2>
      <Link href="/menu">Go to menu and order some pizza.</Link>
    </StyledEmptyBasket>
  );
}

export default EmptyBasket;
