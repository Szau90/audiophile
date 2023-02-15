import classes from "./ProductCard.module.css";
type Props = { children: React.ReactNode };
const ProductCard: React.FC<Props> = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

export default ProductCard;
