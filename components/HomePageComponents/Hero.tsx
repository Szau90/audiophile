import classes from "./Hero.module.css";
import ProductButton from "../UI/ProductButton";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  const action = () => {
    router.push("/headphones/xx99-mark-two-headphones");
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.bg}>
        <div className={classes.hero_content}>
          <h4 className={classes.subtitle}>New product</h4>
          <h1 className={classes.title}>
            XX99 Mark II <br />
            Headphones
          </h1>
          <p className={classes.description}>
            Experience natural, lifelike audio and exceptional
            <br /> build quality made for the passionate music
            <br /> enthusiast.
          </p>
          <div className={classes.action}>
            <ProductButton name={"see product"} action={action} />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
