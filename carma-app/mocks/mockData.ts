``;
import Client, { Address } from "../model/Client";
import OrderInstance from "../model/Order";
import OrderItemInstance from "../model/OrderItem";
import { IMenuItem } from "../model/MenuItem";

export const testMenuItem: IMenuItem = {
  id: 1,
  name: "Margharita",
  prices: [5, 10, 15],
  image: "/images/margharita.svg",
  description:
    "Pizza for poor people. If you're broke or the paycheck is near but not there yet, you may order this one to get a mediocre excuse for a pizza. Delish.",
  isVegan: true,
  isSpicy: false,
};
export const testMenuItem2: IMenuItem = {
  id: 2,
  name: "Salame",
  prices: [7, 12, 19],
  image: "/images/salame.svg",
  description:
    "If you're a carnivore, you might consider this pizza. No vegan BS, just meat for reasonable price.",
  isVegan: false,
  isSpicy: true,
};
export const testOrderItem = new OrderItemInstance("Margharita", "S", 10, 2);
export const testOrderItem2 = new OrderItemInstance("Salame", "M", 15, 1);
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
export const standardDeliveryCost = 9;
