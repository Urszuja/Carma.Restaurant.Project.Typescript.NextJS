import { typeImplementation } from "@testing-library/user-event/dist/type/typeImplementation";
import Order from "./Order"

describe("order tests", () => {

    const testOrder = new Order('Pizza Lover',['pizza'],'pending')
    test('new order created',()=>{
        expect(testOrder.client).toBe('Pizza Lover');
        expect(testOrder.orderItems.length).toBe(1);
        expect(testOrder.status).toBe('pending');
        expect(typeof testOrder.id).toBe("string");

    })})