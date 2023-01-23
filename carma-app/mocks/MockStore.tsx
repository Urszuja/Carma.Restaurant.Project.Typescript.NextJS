import React, { createContext, useMemo, useState } from "react";
import {
  testOrder,
  testOrder2,
  testOrderItem,
  testOrderItem2,
} from "./mockData";
import { IMenuItem } from "../model/MenuItem";
import OrderInstance from "../model/Order";
import OrderItemInstance from "../model/OrderItem";
import {
  DataStoreContextInterface,
  DataStoreProviderProps,
} from "../components/DataStoreContext";

export const MockStoreContext = createContext<DataStoreContextInterface>(
  {} as DataStoreContextInterface
);
MockStoreContext.displayName = "MockStoreContext";

function MockStoreProvider({ children }: DataStoreProviderProps) {
  const [ordersDatabase, setOrdersDatabase] = useState<OrderInstance[] | null>([
    testOrder,
    testOrder2,
  ]);
  const [cart, setCart] = useState<OrderItemInstance[] | null>([
    testOrderItem,
    testOrderItem2,
  ]);
  const [menu, setMenu] = useState<IMenuItem[] | null>([]);
  const [filteredMenu, setFilter] = useState<IMenuItem[] | null>([]);

  const storeDataWithMemo = useMemo(
    () => ({
      ordersDatabase,
      cart,
      menu,
      filteredMenu,
      setOrdersDatabase,
      setCart,
      setMenu,
      setFilter,
    }),
    [
      ordersDatabase,
      cart,
      menu,
      filteredMenu,
      setOrdersDatabase,
      setCart,
      setMenu,
      setFilter,
    ]
  );

  return (
    <MockStoreContext.Provider value={storeDataWithMemo}>
      {children}
    </MockStoreContext.Provider>
  );
}

export default MockStoreProvider;
