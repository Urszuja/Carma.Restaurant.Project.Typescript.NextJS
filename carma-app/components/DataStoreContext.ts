import { createContext, useMemo, useState } from 'react';
import { mockClientsDataBase } from '../mockData';

import type Client from '../model/Client';
import type Order from '../model/Order';


interface DataStoreContextInterface {
  clientsData: Client[] | null;
  setClientsData: React.Dispatch<React.SetStateAction<Client[] | null>>;
  cart: Order | null;
  setCart: React.Dispatch<React.SetStateAction<Order | null>>;
}

type DataStoreProviderProps = { children: React.ReactNode };

const DataStoreContext = createContext<DataStoreContextInterface | null>(null);

export const DataStoreProvider = ({ children }: DataStoreProviderProps) => {
  const [clientsData, setClientsData] = useState<Client[] | null>(mockClientsDataBase);
  const [cart, setCart] = useState<Order | null>(null);

  const storeDataWithMemo = useMemo(
    () => ({
      clientsData,
      cart,
      setClientsData,
      setCart

    }),
    [clientsData, cart, setClientsData, setCart],
  );

  return 
    <DataStoreContext.Provider></DataStoreContext.Provider>
};

export default DataStoreContext;

// <DataStoreContext.Provider value={storeDataWithMemo}>
// {children}</DataStoreContext.Provider>;