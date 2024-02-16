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
      <div className={classes.container}>
        <h1 className={classes.title}>You may also like</h1>
        <div className={classes.content}>
          {others.map((item, index) => (
            <div key={index} className={classes.item}>
              <Image
                className={classes.desktop}
                src={item.image}
                alt=""
                width={350}
                height={325}
              />

              <h1>{item.name}</h1>

              <ProductButton
                name={"see product"}
                action={() => {
                  router.push(`/${item.category}/${item.slug}`);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Others;
