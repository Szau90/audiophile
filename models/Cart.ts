export interface cartItem {
  id: number;
  price: number;
  totalPrice: number;
  quantity: number;
  title: string;
  cartImg: string;
  shortName: string;
}
export interface cartState {
  items: cartItem[];
  totalQuantity: number;
  quantity: number;
  changed: boolean;
}
