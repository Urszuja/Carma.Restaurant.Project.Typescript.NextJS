import { testOrderItem } from "../mocks/mockData";

describe("order item tests", () => {
  test("new order item created", () => {
    expect(testOrderItem.name).toBe("margharita");
    expect(testOrderItem.size).toBe("S");
    expect(testOrderItem.price).toBe(10);
    expect(testOrderItem.quantity).toBeGreaterThan(1);
    expect(typeof testOrderItem.id).toBe("string");
  });
});
