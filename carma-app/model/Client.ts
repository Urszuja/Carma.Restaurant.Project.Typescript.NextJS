import { v4 as uuidv4 } from "uuid";
import Order from "./Order";

export type Address = [
  street: string,
  zip: number,
  city: string,
  apartmentNumber?: number
];
export interface IClient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  address: Address;
}

class Client implements IClient {
  public id: string;

  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: number,
    public address: Address
  ) {
    this.id = uuidv4();
  }
}

export default Client;
