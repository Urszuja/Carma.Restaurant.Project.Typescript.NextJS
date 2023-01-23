import Client, { Address } from "./Client";
import { testOrder, testClient } from "../mocks/mockData";

testOrder.totalPrice = 10;

describe("order tests", () => {
  test("new order created", () => {
    expect(typeof testOrder.id).toBe("string");
    expect(testOrder.client).toEqual(testClient);
    expect(testOrder.orderItems.length).toBe(1);
    expect(testOrder.status).toBe("pending");
    expect(testOrder.totalPrice).toBeGreaterThan(0);
  });
});
