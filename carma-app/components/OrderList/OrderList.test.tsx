import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import OrderList from "./OrderList";
import {
  DataStoreContext,
  DataStoreContextInterface,
} from "../DataStoreContext";
import createMockStore from "../../mocks/MockStore";

describe("testing order list functionality ", () => {
  test("orderlist is rendering correctly", () => {
    const store = createMockStore() as DataStoreContextInterface;
    render(
      <DataStoreContext.Provider value={store}>
        <OrderList />
      </DataStoreContext.Provider>
    );

    const date = screen.getByText(/date/i);

    expect(date).toBeInTheDocument();
  });
});
