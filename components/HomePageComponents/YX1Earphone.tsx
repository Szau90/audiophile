import BlackBorderBtn from "../UI/BlackBorderBtn";
import classes from "./YX1Earphone.module.css";


const YX1Earphone = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <div className={classes.img}>
            
          </div>
          <div className={classes.content}>
           
              <h2>Yx1 Earphones</h2>
              <div>
              <BlackBorderBtn link={'/earphones/yx1-earphones'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YX1Earphone;
