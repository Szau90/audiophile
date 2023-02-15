import classes from "./ProductButton.module.css";

const ProductButton: React.FC<{
  name: string;
  action: () => void;
}> = (props) => {
  return (
    <button className={classes.button} onClick={props.action}>
      {props.name}
    </button>
  );
};

export default ProductButton;
