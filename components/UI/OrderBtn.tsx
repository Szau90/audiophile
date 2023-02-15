import classes from "./ProductButton.module.css";

const OrderBtn: React.FC<{
  name: string;
}> = (props) => {
  return (
    <button form="OrderForm" type="submit" className={classes.button}>
      {props.name}
    </button>
  );
};

export default OrderBtn;