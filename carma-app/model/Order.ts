import { v4 as uuidv4 } from "uuid";
import Client from "./Client";
import OrderItem from "./OrderItem";

export type Status = "pending" | "delivered";

interface IOrder {
  id: string;
  client: Client;
  orderItems: OrderItem[];
  totalPrice: number;
  status: Status;
  timeStamp: string;
}

export default class OrderInstance implements IOrder {
  public id: string;
  public totalPrice: number;
  public timeStamp: string;
  constructor(
    public client: Client,
    public orderItems: OrderItem[],
    public status: Status
  ) {
    this.id = uuidv4();
    this.totalPrice = 0;
    this.timeStamp = new Date().toJSON().slice(0, 10);
  }
}
