import BlackProductButton from "../UI/BlackProductButton";
import classes from "./ZX9Speaker.module.css";
import Image from "next/image";

const ZX9Speaker = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <div className={classes.speakerImage}>
            <Image
              
              src={"/images/image-speaker-zx9.png"}
              alt={"ZX9 speaker"}
              className={classes.speakerImg && classes.desktop}
              width={360}
              height={400}
            />
              <Image
              
              src={"/images/image-speaker-zx9-tablet.png"}
              alt={"ZX9 speaker"}
              className={classes.speakerImg && classes.tablet}
              width={190}
              height={210}
            />
                 <Image
              
              src={"/images/image-speaker-zx9-mobile.png"}
              alt={"ZX9 speaker"}
              className={classes.speakerImg && classes.mobile}
              width={150}
              height={180}
            />
          </div>
          <div className={classes.circles}>
            <svg width="944" height="944" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".202">
                <circle cx="472" cy="472" r="235.5" />
                <circle cx="472" cy="472" r="270.5" />
                <circle cx="472" cy="472" r="471.5" />
              </g>
            </svg>
          </div>

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
            <div className={classes.action}>
              <BlackProductButton link="/speakers/zx9-speaker" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZX9Speaker;
