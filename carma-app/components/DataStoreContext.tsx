import { createContext, useMemo, useState } from "react";
import { testOrder } from "../mockData";

import OrderInstance from "../model/Order";

interface DataStoreContextInterface {
  ordersDatabase: OrderInstance[] | null;
  setOrdersDatabase: React.Dispatch<
    React.SetStateAction<OrderInstance[] | null>
  >;
  cart: OrderInstance | null;
  setCart: React.Dispatch<React.SetStateAction<OrderInstance | null>>;
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
  const [cart, setCart] = useState<OrderInstance | null>(testOrder);

  const storeDataWithMemo = useMemo(
    () => ({
      ordersDatabase,
      cart,
      setOrdersDatabase,
      setCart,
    }),
    [ordersDatabase, cart, setOrdersDatabase, setCart]
  );

  return (
    <DataStoreContext.Provider value={storeDataWithMemo}>
      {children}
    </DataStoreContext.Provider>
  );
};

export default DataStoreProvider;
