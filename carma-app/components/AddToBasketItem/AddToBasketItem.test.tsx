import { act, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddToBasketItem from "./AddToBasketItem";
import { testMenuItem } from "../../mocks/mockData";
import {
  DataStoreContext,
  DataStoreContextInterface,
} from "../DataStoreContext";
import createMockStore from "../../mocks/MockStore";

//import * as uuid from "uuid";
import OrderItemInstance from "../../model/OrderItem";

jest.mock("uuid", () => {
  const originalModule = jest.requireActual("uuid");
  return { ...originalModule, v4: () => "123456789" };
});

describe("test adding to basket", () => {
  const addToBasket = jest.fn();
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
        closeBasket={addToBasket}
      />
    );
    const name = screen.getByText(/Margharita/i);

    expect(name).toBeInTheDocument();
  });

  test("increase amount", () => {
    render(
      <AddToBasketItem
        name={testMenuItem.name}
        id={testMenuItem.id}
        prices={testMenuItem.prices}
        image={testMenuItem.image}
        description={testMenuItem.description}
        isSpicy={testMenuItem.isSpicy}
        isVegan={testMenuItem.isVegan}
        closeBasket={addToBasket}
      />
    );

    const increaseButton = document.querySelector(
      '[alt="plus"]'
    )! as HTMLImageElement;

    act(() => increaseButton.click());

    const quantityDiv = document.querySelector(".number")! as HTMLDivElement;
    const quantityNum = parseInt(quantityDiv.innerHTML);
    expect(increaseButton).toBeInTheDocument();
    expect(quantityNum).toBe(2);
  });

  test("decrease amount", () => {
    render(
      <AddToBasketItem
        name={testMenuItem.name}
        id={testMenuItem.id}
        prices={testMenuItem.prices}
        image={testMenuItem.image}
        description={testMenuItem.description}
        isSpicy={testMenuItem.isSpicy}
        isVegan={testMenuItem.isVegan}
        closeBasket={addToBasket}
      />
    );

    const decreaseButton = document.querySelector(
      '[alt="minus"]'
    )! as HTMLImageElement;
    const increaseButton = document.querySelector(
      '[alt="plus"]'
    )! as HTMLImageElement;

    act(() => {
      increaseButton.click();
      increaseButton.click();
      decreaseButton.click();
    });
    const quantityDiv = document.querySelector(".number")! as HTMLDivElement;
    const quantityNum = parseInt(quantityDiv.innerHTML);

    expect(decreaseButton).toBeInTheDocument();
    expect(quantityNum).toBe(2);
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
          closeBasket={addToBasket}
        />
      </DataStoreContext.Provider>
    );
    const pizzaMedium = document.querySelector(
      "input#medium"
    )! as HTMLInputElement;
    pizzaMedium.click();
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

  test("adding one more pizza of same size and type to basket", async () => {
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
          closeBasket={addToBasket}
        />
      </DataStoreContext.Provider>
    );
    const pizzaSmall = document.querySelector(
      "input#small"
    )! as HTMLInputElement;
    const submitButton = document.querySelector("button")!;
    act(() => {
      pizzaSmall.click();
      submitButton.click();
    });
    await waitFor(() => {
      expect(mockedSetState).toHaveBeenCalledWith([
        {
          id: "123456789",
          name: "Margharita",
          price: 10,
          quantity: 3,
          size: "S",
        } as OrderItemInstance,
        {
          id: "123456789",
          name: "Salame",
          price: 15,
          quantity: 1,
          size: "M",
        } as OrderItemInstance,
      ]);
    });
  });
});
