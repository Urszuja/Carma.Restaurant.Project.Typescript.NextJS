import { testClient, testAddress, testOrder } from "../mockData";

describe("client tests", () => {

    testClient.orderList.push(testOrder);
    
    test('new order created',()=>{
        expect(typeof testClient.id).toBe("string");
        expect(testClient.firstName).toBe('Krystyna');
        expect(testClient.lastName).toBe('Janda');
        expect(testClient.email).toContain('@');
        expect(testClient.phoneNumber).toBeGreaterThan(0);
        expect(testClient.orderList.length).toBe(1);
        expect(testClient.address).toEqual(testAddress)

    })})