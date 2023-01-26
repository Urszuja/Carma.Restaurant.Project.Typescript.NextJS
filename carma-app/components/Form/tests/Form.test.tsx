import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Form from "../Form";
import {
  DataStoreContext,
  DataStoreContextInterface,
} from "../../DataStoreContext";
import createMockStore from "../../../mocks/MockStore";

const mockedData = {
  address: "ul. Jandy 2/9",
  address2: undefined,
  city: "Los Jandos",
  company: undefined,
  email: "janda@o2.pl",
  firstName: "Krystyna",
  lastName: "Janda",
  phone: "123456789",
  wishes: undefined,
  zip: "12345",
};

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockedData),
  })
) as jest.Mock;

jest.mock("uuid", () => {
  const originalModule = jest.requireActual("uuid");
  return { ...originalModule, v4: () => "123456789" };
});

jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));
describe("testing form functionality", () => {
  const store = createMockStore() as DataStoreContextInterface;
  const mockedSetState = jest.fn();

  it("should display required error when values are invalid", async () => {
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
        value: mockedData.email,
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(6);
  });

  it("should display error message if first name is too short", async () => {
    render(
      <DataStoreContext.Provider value={{ ...store, setCart: mockedSetState }}>
        <Form />
      </DataStoreContext.Provider>
    );

    const firstNameInput = await screen.findByRole("firstName");
    const lastNameInput = await screen.findByRole("lastName");
    const emailInput = await screen.findByRole("email");
    const phoneInput = await screen.findByRole("phone");
    const addressInput = await screen.findByRole("address");
    const zipInput = await screen.findByRole("zip");
    const cityInput = await screen.findByRole("city");

    fireEvent.input(emailInput, {
      target: {
        value: "test@gmail.com",
      },
    });

    fireEvent.input(firstNameInput, {
      target: {
        value: "K",
      },
    });
    fireEvent.input(lastNameInput, {
      target: {
        value: "Janda",
      },
    });
    fireEvent.input(phoneInput, {
      target: {
        value: 123456789,
      },
    });
    fireEvent.input(addressInput, {
      target: {
        value: "ul. Jandy 2/9",
      },
    });
    fireEvent.input(zipInput, {
      target: {
        value: "66-666",
      },
    });
    fireEvent.input(cityInput, {
      target: {
        value: "Los Jandos",
      },
    });

    fireEvent.submit(screen.getByRole("button"));
    const alert = await screen.findByRole("alert");

    expect(alert.innerHTML).toBe("This input is too short.");
  });

  it("should accept correct inputs ", async () => {
    render(
      <DataStoreContext.Provider value={store}>
        <Form />
      </DataStoreContext.Provider>
    );

    const firstNameInput = await screen.findByRole("firstName");
    const lastNameInput = await screen.findByRole("lastName");
    const emailInput = await screen.findByRole("email");
    const phoneInput = await screen.findByRole("phone");
    const addressInput = await screen.findByRole("address");
    const zipInput = await screen.findByRole("zip");
    const cityInput = await screen.findByRole("city");

    fireEvent.input(emailInput, {
      target: {
        value: mockedData.email,
      },
    });

    fireEvent.input(firstNameInput, {
      target: {
        value: mockedData.firstName,
      },
    });
    fireEvent.input(lastNameInput, {
      target: {
        value: mockedData.lastName,
      },
    });
    fireEvent.input(phoneInput, {
      target: {
        value: mockedData.phone,
      },
    });
    fireEvent.input(addressInput, {
      target: {
        value: mockedData.address,
      },
    });
    fireEvent.input(zipInput, {
      target: {
        value: mockedData.zip,
      },
    });
    fireEvent.input(cityInput, {
      target: {
        value: mockedData.city,
      },
    });

    fireEvent.submit(screen.getByRole("button"));
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith("http://localhost:5000/orderList", {
        body: '{"client":{"firstName":"Krystyna","lastName":"Janda","email":"janda@o2.pl","address":["ul. Jandy 2/9","12345","Los Jandos",null],"id":"123456789"},"orderItems":[{"name":"Margharita","size":"S","price":10,"quantity":2,"id":"123456789"},{"name":"Salame","size":"M","price":15,"quantity":1,"id":"123456789"}],"status":"pending","id":"123456789","totalPrice":0,"timeStamp":"2020-01-01"}',
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
    });
  });
});
