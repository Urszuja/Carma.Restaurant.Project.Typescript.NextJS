``;
import Client, { Address } from "./model/Client";
import OrderInstance from "./model/Order";
import OrderItemInstance from "./model/OrderItem";

export const testOrderItem = new OrderItemInstance("margharita", "S", 10, 2);
export const testOrderItem2 = new OrderItemInstance("salame", "M", 15, 1);
export const testAddress: Address = ["Jandy 21", 12345, "Biala Podlaska", 37];
export const testClient = new Client(
  "Krystyna",
  "Janda",
  "krystyna@janda.pl",
  1011700,
  testAddress
);
export const testOrder = new OrderInstance(
  testClient,
  [testOrderItem, testOrderItem2],
  "pending"
);
export const testOrder2 = new OrderInstance(
  testClient,
  [testOrderItem],
  "delivered"
);

export const mockOrders = [testOrder, testOrder2];
export const mockClientsDataBase = [testClient];
export const deliveryCost = 9;
