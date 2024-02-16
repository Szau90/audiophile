import BlackProductButton from "../UI/BlackProductButton";
import classes from "./ZX9Speaker.module.css";

const ZX9Speaker = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.sectionImage}></div>

        <div className={classes.speakerContent}>
          <h1>
            ZX9
            <br />
            speaker
          </h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
        
            <BlackProductButton link="/speakers/zx9-speaker" />
          
        </div>
      </div>
    </>
  );
};

export default ZX9Speaker;
