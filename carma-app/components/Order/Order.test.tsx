import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Order from "./Order";

import {
  DataStoreContextInterface,
  DataStoreContext,
} from "../DataStoreContext";

import createMockStore from "../../mocks/MockStore";

describe("test Order functionality", () => {
  const mockStore = createMockStore() as DataStoreContextInterface;

  test("order displays pizzas in cart", () => {
    render(
      <DataStoreContext.Provider value={mockStore}>
        <Order />
      </DataStoreContext.Provider>
    );

    const margharita = screen.getAllByRole("name-display")[0];

    console.log(margharita);

    expect(margharita).toHaveTextContent(/Margharita/i);
  });
});
