import Categories from "../../components/Categories";
import ProductButton from "../../components/UI/ProductButton";
import { useRouter } from "next/router";
import classes from "./EmptyCart.module.css";

const EmptyCart = () => {
  const router = useRouter();
  const action = () => {
    router.push("/");
  };
  return (
    <>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>
          Your Cart is empty please add some items!
        </h1>
        <Categories />
        <ProductButton name={"back to home"} action={action}/>
      </div>
    </>
  );
};

export default EmptyCart;
