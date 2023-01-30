import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import {
  DataStoreContext,
  DataStoreContextInterface,
} from "../DataStoreContext";
import createMockStore from "../../mocks/MockStore";
describe("testing header functionality ", () => {
  const mockStore = createMockStore() as DataStoreContextInterface;
  test("header is rendering correctly", () => {
    render(
      <DataStoreContext.Provider value={mockStore}>
        <Header />
      </DataStoreContext.Provider>
    );

    const restaurantName = screen.getByText(/Carma/i);
    const cartItems = document.querySelector(".order-items")! as HTMLDivElement;
    const cartItemsNumber = parseInt(cartItems.innerHTML);

    expect(restaurantName).toBeInTheDocument();
    expect(cartItems).toBeInTheDocument();
    expect(cartItemsNumber).toBe(2);
  });
});
