``
import Client, { Address } from "./model/Client";
import Order from "./model/Order";
import OrderItem from "./model/OrderItem";

export const testOrderItem = new OrderItem('margharita',2,10,2)
export const testAddress : Address = ['Jandy', 21, 37, 12345, 'Biala Podlaska'];
export const testClient = new Client('Krystyna','Janda','krystyna@janda.pl',1011700, [], testAddress);
export const testOrder = new Order(testClient,[testOrderItem],'pending');
export const mockClientsDataBase  = [testClient];