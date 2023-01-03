import { v4 as uuidv4 } from "uuid";
import { IMenuItem } from "./MenuItem";

export type Sizes = "S" | "M" | "L";
export interface IOrderItem {
  id: string;
  name: string;
  size: Sizes;
  price: number;
  quantity: number;
  menu?: IMenuItem[];
}

export default class OrderItem implements IOrderItem {
  public id: string;

  constructor(
    public name: string,
    public size: Sizes,
    public price: number,
    public quantity: number
  ) {
    this.id = uuidv4();
  }
}
