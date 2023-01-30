import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmptyBasket from "./EmptyBasket";
import React from "react";

describe("testing empty  functionality ", () => {
  test("empty basket is rendering correctly", () => {
    render(<EmptyBasket />);

    const restaurantName = screen.getByText(/Carma/i);

    expect(restaurantName).toBeInTheDocument();
  });
});
