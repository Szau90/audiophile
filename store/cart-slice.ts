import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartState, cartItem } from "../models/Cart";


const initialState: cartState = {
  items: [],
  totalQuantity: 0,
  quantity: 0,
  changed: false,
};
const addToCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state: cartState, action: PayloadAction<cartItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          title: newItem.title,
          totalPrice: newItem.price * newItem.quantity,
          cartImg: newItem.cartImg,
          shortName: newItem.shortName,
        });
        state.totalQuantity = newItem.quantity;
        state.quantity = 1;
      
      } else {
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        existingItem.quantity++
        state.totalQuantity = existingItem.quantity + newItem.quantity;
        state.quantity = 1;
      }
    },
    removeItemFromCart(state: cartState, action: PayloadAction<cartItem>) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId.id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId.id);

      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem!.price;
      }
    },
    removeAllItem(state: cartState) {
      const cartItems = state.items;
      cartItems.splice(0, cartItems.length);
      state.changed = true;
      state.totalQuantity = 0;
    },
    increment(state: cartState, action) {
      if (action.type === "cart/increment") {
        state.quantity++;
        state.changed = true;
      }
    },
    decrement(state: cartState, action) {
      if (action.type === "cart/decrement") {
        if (state.quantity > 0) {
          state.quantity--;
          state.changed = true;
        }else {
          return
        }
      }
    },
    replaceCart( state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    }
  },
});
export const cartActions = addToCartSlice.actions;
export default addToCartSlice.reducer;
