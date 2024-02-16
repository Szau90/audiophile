import classes from "./ProductItem.module.css";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { cartActions } from "../../store/cart-slice";
import ProductButton from "../UI/ProductButton";
import { useEffect } from "react";
import { sendCartData } from "../../store/cart-actions";
import Image from "next/image";
import { Images } from "../../models/Products";

let isInitial = false;

const ProductItem: React.FC<{
  id: number;
  title: string;
  image: Images;
  description: string;
  price: number;
  cartImg: string;
  shortName: string;
  category: string;
  categoryImages: Images;
}> = (props) => {
  const dispatch = useAppDispatch();
  const qty = useAppSelector((state) => state.cart.quantity);
  const cart = useAppSelector((state) => state.cart);

  const {
    id,
    title,
    description,
    price,
    cartImg,
    shortName,
    categoryImages,
  } = props;
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
    <div className={classes.container}>
      <div className={classes.image_container}>
        <Image
          src={categoryImages.desktop}
          alt={title}
          fill
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div className={classes.content}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p className={classes.price}>$ {price}</p>
         <div className={classes.actions}>
         <div className={classes.itemCounter}>
            <button onClick={decrementHandler}>-</button>
            <span>{qty}</span>
            <button onClick={incrementHandler}>+</button>
          </div>
          <ProductButton name={"add to cart"} action={addToCartHandler} />
         </div>
      </div>
    </div>
  );
};

export default ProductItem;
