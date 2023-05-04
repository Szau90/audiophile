import classes from "./ProductButton.module.css";
import { Manrope } from "@next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

const ProductButton: React.FC<{
  name: string;
  action: () => void;
}> = (props) => {
  const { name, action } = props;

  return (
    <button
      className={`${classes.button} ${manrope.className}`}
      onClick={action}
    >
      {name}
    </button>
  );
};

export default ProductButton;
