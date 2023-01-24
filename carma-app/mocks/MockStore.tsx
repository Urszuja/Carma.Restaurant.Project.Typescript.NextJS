import { DataStoreContextInterface } from "../components/DataStoreContext";
import {
  mockOrders,
  testMenuItem,
  testMenuItem2,
  testOrderItem,
  testOrderItem2,
} from "./mockData";

function createMockStore(): DataStoreContextInterface {
  const ordersDatabase = mockOrders;
  const cart = [testOrderItem, testOrderItem2];
  const menu = [testMenuItem, testMenuItem2];
  const filteredMenu = [testMenuItem, testMenuItem2];

  const setOrdersDatabase = jest.fn();
  const setCart = jest.fn();
  const setMenu = jest.fn();
  const setFilter = jest.fn();

  return {
    ordersDatabase,
    cart,
    menu,
    filteredMenu,
    setOrdersDatabase,
    setCart,
    setMenu,
    setFilter,
  };
}

export default createMockStore;
