import classes from "./ZX7Speaker.module.css";
import BlackBorderBtn from "../UI/BlackBorderBtn";

const ZX7Speaker = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <h2>Zx7 speaker</h2>
          <BlackBorderBtn link={"/speakers/zx7-speaker"} />
        </div>
      </div>
    </>
  );
};

export default ZX7Speaker;
