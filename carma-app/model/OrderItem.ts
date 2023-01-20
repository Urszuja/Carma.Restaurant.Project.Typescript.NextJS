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

export default class OrderItemInstance implements IOrderItem {
  public id: string;

  constructor(
    public name: string,
    public size: Sizes,
    public price: number,
    public quantity: number
  ) {
    this.id = uuidv4();
  }

  changeQuantity(num: number): void {
    this.quantity += num;
  }

  increaseQuantity(): void {
    this.quantity += 1;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }
}
