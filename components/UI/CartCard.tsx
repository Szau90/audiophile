import classes from "./CartCard.module.css";
type Props = { children: React.ReactNode };
const CartCard: React.FC<Props> = ({ children }) => {
  return <div className={classes.cartCard}>{children}</div>;
};

export default CartCard;