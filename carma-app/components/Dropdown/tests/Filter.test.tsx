import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  DataStoreContext,
  DataStoreContextInterface,
} from "../../DataStoreContext";
import createMockStore from "../../../mocks/MockStore";
import Filter from "../Filter";

describe("testing filter functionality", () => {
  const mockStore = createMockStore() as DataStoreContextInterface;
  test("options for sorting are visible", () => {
    render(
      <DataStoreContext.Provider value={mockStore}>
        <Filter type="sort" />
      </DataStoreContext.Provider>
    );

    fireEvent.click(screen.getByAltText("arrow-down"));
    const dropDownItems = screen.getAllByRole("option");
    const arrowUp = document.querySelectorAll("img")[1] as HTMLImageElement;
    expect(dropDownItems).toHaveLength(2);
    expect(dropDownItems[0]).toHaveTextContent("price");
    expect(arrowUp.alt).toContain(/arrow-up.svg/i);
  });

  test("options for filtering are visible", () => {
    render(
      <DataStoreContext.Provider value={mockStore}>
        <Filter type="filter" />
      </DataStoreContext.Provider>
    );

    fireEvent.click(screen.getByAltText("arrow-down"));
    const dropDownItems = screen.getAllByRole("option");

    expect(dropDownItems).toHaveLength(2);
    expect(dropDownItems[0]).toHaveTextContent("vegan");
  });
});
