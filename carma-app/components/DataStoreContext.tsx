import { createContext, useMemo, useState } from "react";
import { testOrder, testOrderItem, testOrderItem2 } from "../mockData";

import OrderInstance from "../model/Order";
import OrderItemInstance from "../model/OrderItem";

interface DataStoreContextInterface {
  ordersDatabase: OrderInstance[] | null;
  setOrdersDatabase: React.Dispatch<
    React.SetStateAction<OrderInstance[] | null>
  >;
  cart: OrderItemInstance[] | null;
  setCart: React.Dispatch<React.SetStateAction<OrderItemInstance[] | null>>;
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
  const [cart, setCart] = useState<OrderItemInstance[] | null>([
    testOrderItem,
    testOrderItem2,
  ]);

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
