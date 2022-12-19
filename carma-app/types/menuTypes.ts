import { type } from "os";

type MenuItem = {
    id: number,
    name: string,
    prices: number[],
    image: string,
    description: string,
    isVegan: boolean,
    isSpicy: boolean
}