import classes from "./Others.module.css";
import ProductButton from "./UI/ProductButton";
import { useRouter } from "next/router";
import Image from "next/image";

const Others: React.FC<{
  others: {
    0: { image: string; name: string; slug: string; category: string; mobileImg:string; tabletImg: string;};
    1: { image: string; name: string; slug: string; category: string; mobileImg: string; tabletImg: string; };
    2: { image: string; name: string; slug: string; category: string; mobileImg: string; tabletImg: string; };
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
            <Image className={classes.desktop} src={props.others[0].image} alt="" 
            width={350}
            height={325} />
            <Image className={classes.mobile} src={props.others[0].mobileImg} alt=""
            width={327}
            height={120}  />
             <Image className={classes.tablet} src={props.others[0].tabletImg} alt=""
            width={200}
            height={200}  />

            <h1>{props.others[0].name}</h1>
            <div className={classes.action}>
              <ProductButton name={"see product"} action={firstAction} />
            </div>
          </div>
          <div className={classes.item}>
            <Image className={classes.desktop} src={props.others[1].image} alt=""
            width={350}
            height={325}  />
             <Image className={classes.mobile} src={props.others[1].mobileImg} alt=""
            width={327}
            height={120}  />
             <Image className={classes.tablet} src={props.others[1].tabletImg} alt=""
            width={210}
            height={320}  />

            <h1>{props.others[1].name}</h1>
            <div  className={classes.action}>
              <ProductButton name={"see product"} action={secondAction} />
            </div>
          </div>
          <div className={classes.item}>
            <Image className={classes.desktop} src={props.others[2].image} alt="" 
            width={350}
            height={325}  />
            <Image className={classes.mobile} src={props.others[2].mobileImg} alt=""
            width={327}
            height={120}  />
             <Image className={classes.tablet} src={props.others[2].tabletImg} alt=""
            width={200}
            height={200}  />

            <h1>{props.others[2].name}</h1>
            <div  className={classes.action}>
              <ProductButton name={"see product"} action={thirdAction} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Others;
