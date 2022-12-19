import Client, { Address } from "./Client";
import {testOrder} from "./Order.test";

const testAddress : Address = ['Jandy', 21, 37, 12345, 'Biala Podlaska'];

const testClient = new Client('Krystyna','Janda','krystyna@janda.pl',1011700, [testOrder], testAddress)

describe("client tests", () => {
    test('new order created',()=>{
        expect(typeof testClient.id).toBe("string");
        expect(testClient.firstName).toBe('Krystyna');
        expect(testClient.lastName).toBe('Janda');
        expect(testClient.email).toContain('@');
        expect(testClient.phoneNumber).toBeGreaterThan(0);
        expect(testClient.orderList.length).toBe(1);
        expect(testClient.address).toEqual(testAddress)

    })})