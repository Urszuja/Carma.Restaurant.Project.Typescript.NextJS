import { createContext, useMemo, useState } from "react";
import { mockClientsDataBase, testOrder } from "../mockData";

import type Client from "../model/Client";
import type Order from "../model/Order";

interface DataStoreContextInterface {
  clientsData: Client[] | null;
  setClientsData: React.Dispatch<React.SetStateAction<Client[] | null>>;
  cart: Order | null;
  setCart: React.Dispatch<React.SetStateAction<Order | null>>;
}

type DataStoreProviderProps = { children: React.ReactNode };

export const DataStoreContext = createContext<DataStoreContextInterface>(
  {} as DataStoreContextInterface
);

DataStoreContext.displayName = "DataStoreContext";

const DataStoreProvider = ({ children }: DataStoreProviderProps) => {
  const [clientsData, setClientsData] = useState<Client[] | null>(
    mockClientsDataBase
  );
  const [cart, setCart] = useState<Order | null>(testOrder);

  const storeDataWithMemo = useMemo(
    () => ({
      clientsData,
      cart,
      setClientsData,
      setCart,
    }),
    [clientsData, cart, setClientsData, setCart]
  );

  return (
    <DataStoreContext.Provider value={storeDataWithMemo}>
      {children}
    </DataStoreContext.Provider>
  );
};

export default DataStoreProvider;
