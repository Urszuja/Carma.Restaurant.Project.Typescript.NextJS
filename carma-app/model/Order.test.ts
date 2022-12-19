import Client, { Address } from "./Client";
import Order from "./Order"
import {testOrderItem} from './OrderItem.test';

const testAddress : Address = ['Jandy', 21, 37, 12345, 'Biala Podlaska'];
const testClient = new Client('Krystyna','Janda','krystyna@janda.pl',1011700, [], testAddress)

export const testOrder = new Order(testClient,[testOrderItem],'pending');
testOrder.totalPrice = 10;

describe("order tests", () => {

    
    test('new order created',()=>{
        expect(typeof testOrder.id).toBe("string");
        expect(testOrder.client).toEqual(testClient);
        expect(testOrder.orderItems.length).toBe(1);
        expect(testOrder.status).toBe('pending');
        expect(testOrder.totalPrice).toBeGreaterThan(0);
    })})