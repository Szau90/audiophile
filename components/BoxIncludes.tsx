import { Includes } from "../models/Products";
import classes from "./BoxIncludes.module.css";

const BoxIncludes: React.FC<{
  includes: Includes[];
}> = ({ includes }) => {
  return (
    <ul className={classes.list}>
      {includes.map((include, index) => (
        <li key={index} className={classes.list_item}>
          <p>{include.quantity} x</p>
          <p>{include.item}</p>
        </li>
      ))}
    </ul>
  );
};

export default BoxIncludes;
