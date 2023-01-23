import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddToBasketItem from "./AddToBasketItem";
import { testMenuItem } from "../../mocks/mockData";

describe("test adding to basket", () => {
  test("add to basket renders properly", () => {
    render(
      <AddToBasketItem
        name={testMenuItem.name}
        id={testMenuItem.id}
        prices={testMenuItem.prices}
        image={testMenuItem.image}
        description={testMenuItem.description}
        isSpicy={testMenuItem.isSpicy}
        isVegan={testMenuItem.isVegan}
        closeBasket={() => {
          console.log("basket closed");
        }}
      />
    );
    const name = screen.getByText(/Margharita/i);

    expect(name).toBeInTheDocument();
  });
});
