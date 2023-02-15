import classes from "./BoxIncludes.module.css"

const BoxIncludes: React.FC<{
  includes: {
    0: { item: string; quantity: number };
    1: { item: string; quantity: number };
    2: { item: string; quantity: number };
    3: { item: string; quantity: number };
    4: { item: string; quantity: number };
  };
}> = (props) => {
  return (
    <ul className={classes.incList}>
      <li>
        <span>{props.includes[0].quantity}x</span>
        <span>{props.includes[0].item}</span>
      </li>
      <li>
        <span>{props.includes[1].quantity}x</span>
        <span>{props.includes[1].item}</span>
      </li>
      <li>
        <span>{props.includes[2].quantity}x</span>
        <span>{props.includes[2].item}</span>
      </li>
      <li>
        <span>{props.includes[3].quantity}x</span>
        <span>{props.includes[3].item}</span>
      </li>
      <li>
        <span>{props.includes[4].quantity}x</span>
        <span>{props.includes[4].item}</span>
      </li>
    </ul>
  );
};

export default BoxIncludes;
