import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Form from "../Form";
import {
  DataStoreContext,
  DataStoreContextInterface,
} from "../../DataStoreContext";
import createMockStore from "../../../mocks/MockStore";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("testing form functionality", () => {
  const store = createMockStore() as DataStoreContextInterface;
  const mockedSetState = jest.fn();

  it("should display required error when value is invalid", async () => {
    render(
      <DataStoreContext.Provider value={{ ...store, setCart: mockedSetState }}>
        <Form />
      </DataStoreContext.Provider>
    );

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(7);
  });

  it("should accept e-mail, when input is valid", async () => {
    render(
      <DataStoreContext.Provider value={{ ...store, setCart: mockedSetState }}>
        <Form />
      </DataStoreContext.Provider>
    );
    const emailInput = await screen.findByRole("email");
    await fireEvent.input(emailInput, {
      target: {
        value: "test@gmail.com",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(6);
  });
});
