import classes from "./ProductItem.module.css";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { cartActions } from "../../store/cart-slice";
import ProductButton from "../UI/ProductButton";
import Link from "next/link";
import { useEffect } from "react";
import { sendCartData } from "../../store/cart-actions";
import Image from "next/image";

let isInitial = false;

const ProductItem: React.FC<{
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  cartImg: string;
  shortName: string;
  category: string;
}> = (props) => {
  const dispatch = useAppDispatch();
  const qty = useAppSelector((state) => state.cart.quantity);
  const cart = useAppSelector((state) => state.cart);

  const { id, title, image, description, price, cartImg, shortName, category } =
    props;
  const totalPrice = price + qty;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        cartImg,
        totalPrice: totalPrice,
        quantity: qty,
        shortName,
      })
    );
  };

  const incrementHandler = () => {
    dispatch(cartActions.increment(qty));
  };
  const decrementHandler = () => {
    dispatch(cartActions.decrement(1));
  };

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <div className={classes.box}>
    
      <div className={classes.mainWrapper}>
      <div className={classes.link}>
        <Link href={`/${category}`}>Go Back</Link>
      </div>
        <div className={classes.container}>
          <div className={classes.image}>
            <Image src={image} alt={title}
             width={540}
             height={560} />
          </div>
          <div className={classes.content}>
            <h1>{title}</h1>
            <p>{description}</p>
            <p className={classes.price}>$ {price}</p>
            <div className={classes.wrapper}>
              <div className={classes.itemCounter}>
                <button onClick={decrementHandler}>-</button>
                <span>{qty}</span>
                <button onClick={incrementHandler}>+</button>
              </div>
              <div className={classes.addToCart}>
                <ProductButton name={"add to cart"} action={addToCartHandler} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
