import classes from "./ZX7Speaker.module.css";
import BlackBorderBtn from "../UI/BlackBorderBtn";

const ZX7Speaker = () => {
  return (
    <>
      <div className={classes.box}>
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <h2>Zx7 speaker</h2>
            <div>
              <BlackBorderBtn link={"/speakers/zx7-speaker"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZX7Speaker;
