import classes from "./Card.module.css";
type Props = { children: React.ReactNode };
const Card: React.FC<Props> = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;