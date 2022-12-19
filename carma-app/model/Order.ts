import { v4 as uuidv4 } from 'uuid';
export type Status = "pending" | "delivered";

interface IOrder {
    id: string;
    client: string;
    orderItems: string[];
    status: Status;
}

export default class Order implements IOrder {
    public id: string
    constructor(public client: string, public orderItems: string[], public status: Status){
        this.id = uuidv4(); 
    }
}