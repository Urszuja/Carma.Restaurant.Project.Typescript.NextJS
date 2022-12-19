import OrderItem from "./OrderItem";

export const testOrderItem = new OrderItem('margharita',2,10,2)

describe("order item tests", () => {

    test('new order item created',()=>{
        expect(testOrderItem.name).toBe('margharita');
        expect(testOrderItem.size).toBe(2);
        expect(testOrderItem.price).toBe(10);
        expect(testOrderItem.quantity).toBeGreaterThan(1);
        expect(typeof testOrderItem.id).toBe("string");

    })})