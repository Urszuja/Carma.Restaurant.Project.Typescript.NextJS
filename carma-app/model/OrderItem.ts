import { v4 as uuidv4 } from 'uuid';

export interface IOrderItem {
    id : string;
    name: string;
    size: number;
    price: number;
    quantity: number;
};

 export default class OrderItem implements IOrderItem {
   public id : string;

   constructor(public name: string, public size: number, public price: number, public quantity: number){
    this.id = uuidv4();
   }
} ;