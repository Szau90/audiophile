import BlackBorderBtn from "../UI/BlackBorderBtn";
import classes from "./YX1Earphone.module.css";

const YX1Earphone = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.section_image}></div>
        <div className={classes.content}>
          <h2>Yx1 Earphones</h2>

          <BlackBorderBtn link={"/earphones/yx1-earphones"} />
        </div>
      </div>
    </>
  );
};

export default YX1Earphone;
