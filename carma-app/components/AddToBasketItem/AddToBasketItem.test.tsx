import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddToBasketItem from "./AddToBasketItem";
import { testMenuItem } from "../../mocks/mockData";
import {
  DataStoreContext,
  DataStoreContextInterface,
} from "../DataStoreContext";
import createMockStore from "../../mocks/MockStore";

import * as uuid from "uuid";
import OrderItemInstance from "../../model/OrderItem";
jest.mock("uuid", () => {
  const originalModule = jest.requireActual("uuid");
  return { ...originalModule, v4: () => "123456789" };
});

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

  test("adding new pizza (different type and size) to basket", async () => {
    const store = createMockStore() as DataStoreContextInterface;
    const mockedSetState = jest.fn();

    render(
      <DataStoreContext.Provider value={{ ...store, setCart: mockedSetState }}>
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
      </DataStoreContext.Provider>
    );
    const pizzaLarge = document.querySelector(
      "input#medium"
    )! as HTMLInputElement;
    pizzaLarge.click();
    const submitButton = document.querySelector("button")!;
    submitButton.click();
    await waitFor(() => {
      expect(mockedSetState).toHaveBeenCalledWith([
        {
          id: "123456789",
          name: "Margharita",
          price: 10,
          quantity: 2,
          size: "S",
        } as OrderItemInstance,
        {
          id: "123456789",
          name: "Salame",
          price: 15,
          quantity: 1,
          size: "M",
        } as OrderItemInstance,
        {
          id: "123456789",
          name: "Margharita",
          price: 10,
          quantity: 1,
          size: "M",
        } as OrderItemInstance,
      ]);
    });
  });
});
