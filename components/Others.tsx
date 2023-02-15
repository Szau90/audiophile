import classes from "./Others.module.css";
import ProductButton from "./UI/ProductButton";
import { useRouter } from "next/router";
import Image from "next/image";

const Others: React.FC<{
  others: {
    0: { image: string; name: string; slug: string; category: string };
    1: { image: string; name: string; slug: string; category: string };
    2: { image: string; name: string; slug: string; category: string };
  };
}> = (props) => {
  const firstProductLink = `/${props.others[0].category}/${props.others[0].slug}`;
  const secondProductLink = `/${props.others[1].category}/${props.others[1].slug}`;
  const thirdroductLink = `/${props.others[2].category}/${props.others[2].slug}`;

  const router = useRouter();

  const firstAction = () => {
    router.push(firstProductLink);
  };
  const secondAction = () => {
    router.push(secondProductLink);
  };
  const thirdAction = () => {
    router.push(thirdroductLink);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>You may also like</h1>
        <div className={classes.container}>
          <div className={classes.item}>
            <Image src={props.others[0].image} alt="" />

            <h1>{props.others[0].name}</h1>
            <div>
              <ProductButton name={"see product"} action={firstAction} />
            </div>
          </div>
          <div className={classes.item}>
            <Image src={props.others[1].image} alt="" />

            <h1>{props.others[1].name}</h1>
            <div>
              <ProductButton name={"see product"} action={secondAction} />
            </div>
          </div>
          <div className={classes.item}>
            <Image src={props.others[2].image} alt="" />

            <h1>{props.others[2].name}</h1>
            <div>
              <ProductButton name={"see product"} action={thirdAction} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Others;
