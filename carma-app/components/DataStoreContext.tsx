import { createContext, useMemo, useState } from "react";
import { testOrder, testOrderItem, testOrderItem2 } from "../mockData";

import OrderInstance from "../model/Order";
import OrderItemInstance from "../model/OrderItem";

import type Client from "../model/Client";
import { IMenuItem } from "../model/MenuItem";

interface DataStoreContextInterface {
  ordersDatabase: OrderInstance[] | null;
  setOrdersDatabase: React.Dispatch<
    React.SetStateAction<OrderInstance[] | null>
  >;
  cart: OrderItemInstance[] | null;
  setCart: React.Dispatch<React.SetStateAction<OrderItemInstance[] | null>>;
  menu: IMenuItem[] | null;
  setMenu: React.Dispatch<React.SetStateAction<IMenuItem[] | null>>;
  filteredMenu: IMenuItem[] | null;
  setFilter: React.Dispatch<React.SetStateAction<IMenuItem[] | null>>;
}

type DataStoreProviderProps = { children: React.ReactNode };

export const DataStoreContext = createContext<DataStoreContextInterface>(
  {} as DataStoreContextInterface
);

DataStoreContext.displayName = "DataStoreContext";

const DataStoreProvider = ({ children }: DataStoreProviderProps) => {
  const [ordersDatabase, setOrdersDatabase] = useState<OrderInstance[] | null>(
    []
  );
  const [cart, setCart] = useState<OrderItemInstance[] | null>([]);
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
    <DataStoreContext.Provider value={storeDataWithMemo}>
      {children}
    </DataStoreContext.Provider>
  );
};

export default DataStoreProvider;
