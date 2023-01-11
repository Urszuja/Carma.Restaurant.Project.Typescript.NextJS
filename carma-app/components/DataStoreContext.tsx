import { createContext, useMemo, useState } from "react";
import { mockClientsDataBase, testOrder } from "../mockData";

import type Client from "../model/Client";
import { IMenuItem } from "../model/MenuItem";
import type Order from "../model/Order";

interface DataStoreContextInterface {
  clientsData: Client[] | null;
  setClientsData: React.Dispatch<React.SetStateAction<Client[] | null>>;
  cart: Order | null;
  setCart: React.Dispatch<React.SetStateAction<Order | null>>;
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
  const [clientsData, setClientsData] = useState<Client[] | null>(
    mockClientsDataBase
  );
  const [menu, setMenu] = useState<IMenuItem[] | null>([]);
  const [filteredMenu, setFilter] = useState<IMenuItem[] | null>([]);

  const [cart, setCart] = useState<Order | null>(testOrder);

  const storeDataWithMemo = useMemo(
    () => ({
      clientsData,
      cart,
      menu,
      filteredMenu,
      setClientsData,
      setCart,
      setMenu,
      setFilter,
    }),
    [
      clientsData,
      cart,
      menu,
      filteredMenu,
      setClientsData,
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
