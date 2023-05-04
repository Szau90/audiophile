import classes from "./Others.module.css";
import ProductButton from "./UI/ProductButton";
import { useRouter } from "next/router";
import Image from "next/image";
import { OthersList } from "../models/Products";

const Others: React.FC<{
  others: OthersList[];
}> = ({ others }) => {
  const router = useRouter();

  return (
    <>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>You may also like</h1>
        <div className={classes.container}>
          {others.map((item, index) => (
            <div key={index} className={classes.item}>
              <Image
                className={classes.desktop}
                src={item.image}
                alt=""
                width={350}
                height={325}
              />
              <Image
                className={classes.mobile}
                src={item.mobileImg}
                alt=""
                width={327}
                height={120}
              />
              <Image
                className={classes.tablet}
                src={item.tabletImg}
                alt=""
                width={200}
                height={200}
              />

              <h1>{item.name}</h1>
              <div className={classes.action}>
                <ProductButton
                  name={"see product"}
                  action={() => {
                    router.push(`/${item.category}/${item.slug}`);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Others;
