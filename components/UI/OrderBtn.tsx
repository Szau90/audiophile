import classes from "./ProductButton.module.css";

const OrderBtn: React.FC<{
  name: string;
}> = ({name}) => {
  return (
    <button form="OrderForm" type="submit" className={classes.button}>
      {name}
    </button>
  );
};

export default OrderBtn;