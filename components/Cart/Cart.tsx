import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import CartCard from "../UI/CartCard";
import { cartActions } from "../../store/cart-slice";
import ProductButton from "../UI/ProductButton";
import { uiActions } from "../../store/ui-slice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { fetchCartData, sendCartData } from "../../store/cart-actions";

let isInitial = false;

const Cart = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const cartItems = useAppSelector((state) => state.cart.items);
  const cartState = useAppSelector((state) => state.cart);

  const cartQuantity = cartItems
    .map((q) => q.quantity)
    .reduce((a, b) => a + b, 0);
  const totalPice = cartItems
    .map((p) => p.totalPrice)
    .reduce((a, b) => a + b, 0);
  const cartIsEmpty = cartItems.length === 0;

  const removeAllHandler = () => {
    dispatch(cartActions.removeAllItem());
  };
  const action = () => {
    router.push("/checkout");
    dispatch(uiActions.toogle());
  };

  const cart = (
    <>
      <div className={classes.wrapper}>
        <div className={classes.cartContainer}>
          <div className={classes.header}>
            <h2>Cart ({cartQuantity})</h2>
            <button onClick={removeAllHandler}>Remove all</button>
          </div>
          <ul className={classes.item}>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                title={item.title}
                id={item.id}
                price={item.price}
                totalPrice={item.totalPrice}
                quantity={item.quantity}
                cartImg={item.cartImg}
                shortName={item.shortName}
              />
            ))}
          </ul>
          <div className={classes.total}>
            <p>Total</p>
            <h3>$ {totalPice}</h3>
          </div>
          <div className={classes.checkout}>
            <div>
              <ProductButton name={"checkout"} action={action} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cartState.changed) {
      dispatch(sendCartData(cartState));
    }
  }, [cartState, dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <div className={classes.cart}>
      <CartCard>
        {cartIsEmpty && <h1> Your Cart is empty</h1>}
        {!cartIsEmpty && cart}
      </CartCard>
    </div>
  );
};

export default Cart;
