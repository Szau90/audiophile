import classes from "./XX99Headphone.module.css";
import ProductButton from "../UI/ProductButton";
import { useRouter } from "next/router";

const XX99Headphone = () => {
  const router = useRouter();
  const action = () => {
    router.push("/headphones/xx99-mark-two-headphones");
  };

  return (
    <>
      <div className={classes.bg}>
        <div className={classes.container}>
          <h4 className={classes.subtitle}>New product</h4>
          <h1 className={classes.title}>
            XX99 Mark II <br />
            Headphones
          </h1>
          <p className={classes.text}>
            Experience natural, lifelike audio and exceptional
            <br /> build quality made for the passionate music
            <br /> enthusiast.
          </p>
          <div className={classes.action}>
            <ProductButton name={"see product"} action={action} />
          </div>
        </div>
      </div>
    </>
  );
};

export default XX99Headphone;
