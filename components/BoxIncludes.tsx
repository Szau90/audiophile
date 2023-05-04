import { Includes } from "../models/Products";
import classes from "./BoxIncludes.module.css";

const BoxIncludes: React.FC<{
  includes: Includes[];
}> = ({ includes }) => {
  return (
    <ul className={classes.incList}>
      {includes.map((include, index) => (
        <div key={index} className={classes.wrapper}>
          <li>{include.quantity} x</li>
          <li>{include.item}</li>
        </div>
      ))}
    </ul>
  );
};

export default BoxIncludes;
