import { AppDispatch } from ".";
import { cartActions } from "./cart-slice";
import { cartState } from "../models/Cart";

export const fetchCartData = () => {
  return async (dispatch: AppDispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://audiophile-af1e7-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data: cartState = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      throw new Error("Could not fetch cart data!");
    }
  };
};

export const sendCartData = (cart: cartState) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://audiophile-af1e7-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      throw new Error("Sending cart data failed.");
    }
  };
};
