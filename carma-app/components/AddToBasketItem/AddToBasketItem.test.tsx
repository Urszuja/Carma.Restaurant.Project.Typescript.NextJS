import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import AddToBasketItem from "./AddToBasketItem";
import { testMenuItem } from "../../mocks/mockData";
import {
  DataStoreContext,
  DataStoreContextInterface,
} from "../DataStoreContext";
import createMockStore from "../../mocks/MockStore";

//import * as uuid from "uuid";
import * as OrderItem from "../../model/OrderItem";

jest.mock("uuid", () => {
  const originalModule = jest.requireActual("uuid");
  return { ...originalModule, v4: () => "123456789" };
});

jest.mock("../../model/OrderItem", () => {
  return {
    __esModule: true, //    <----- this __esModule: true is important
    ...jest.requireActual("../../model/OrderItem"),
  };
});

jest.spyOn(window, "alert").mockImplementation(() => {});

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

    fireEvent.click(increaseButton);

    const quantityDiv = document.querySelector(".number")! as HTMLDivElement;
    const quantityNum = parseInt(quantityDiv.innerHTML);
    expect(increaseButton).toBeInTheDocument();
    expect(quantityNum).toBe(2);
  });

  test("increase amount above limit", () => {
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
    for (let i = 0; i < 9; i++) {
      fireEvent.click(increaseButton);
    }

    expect(window.alert).toBeCalledTimes(1);
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

    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    fireEvent.click(decreaseButton);

    const quantityDiv = document.querySelector(".number")! as HTMLDivElement;
    const quantityNum = parseInt(quantityDiv.innerHTML);

    expect(decreaseButton).toBeInTheDocument();
    expect(quantityNum).toBe(2);
  });

  test("decrease amount under limit", () => {
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

    fireEvent.click(decreaseButton);

    expect(window.alert).toBeCalledTimes(1);
  });

  const mockedSetState = jest.fn();

  test("adding new pizza (different type and size) to basket", async () => {
    const store = createMockStore() as DataStoreContextInterface;
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
        } as OrderItem.default,
        {
          id: "123456789",
          name: "Salame",
          price: 15,
          quantity: 1,
          size: "M",
        } as OrderItem.default,
        {
          id: "123456789",
          name: "Margharita",
          price: 10,
          quantity: 1,
          size: "M",
        } as OrderItem.default,
      ]);
    });
  });

  test("adding one more pizza of same size and type to basket", async () => {
    const store = createMockStore() as DataStoreContextInterface;
    const mockIncreaseQuantity = jest.spyOn(OrderItem, "increaseQuantity");

    render(
      <DataStoreContext.Provider value={{ ...store }}>
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

    pizzaSmall.click();
    submitButton.click();

    await waitFor(() => {
      expect(mockIncreaseQuantity).toHaveBeenCalledWith(
        {
          id: "123456789",
          name: "Margharita",
          price: 10,
          quantity: 3,
          size: "S",
        },
        1
      );
    });
  });
});
