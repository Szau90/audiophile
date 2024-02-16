import classes from "./CartItem.module.css";
import { useAppDispatch } from "../../Hooks/hooks";
import { cartActions } from "../../store/cart-slice";
import Image from "next/image";

const CartItem: React.FC<{
  title: string;
  totalPrice: number;
  quantity: number;
  price: number;
  id: number;
  cartImg: string;
  shortName: string;
}> = (props) => {
  const { title, quantity, totalPrice, price, id, cartImg, shortName } = props;

  const dispatch = useAppDispatch();

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        quantity,
        totalPrice,
        cartImg,
        shortName,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(
      cartActions.removeItemFromCart({
        id,
        title,
        price,
        totalPrice,
        quantity,
        cartImg,
        shortName,
      })
    );
  };
  return (
    <li className={classes.item}>
      <Image src={cartImg} alt={title} width={80} height={80} />
      <div className={classes.item_details}>
        <h3>{shortName}</h3>
        <p>$ {price}</p>
      </div>

      <div className={classes.actions}>
        <button onClick={removeItemHandler}>-</button>
        <span>{quantity}</span>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
