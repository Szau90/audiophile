import ProductCard from "../../UI/ProductCard";
import classes from "./ProductList.module.css";
import ProductButton from "../UI/ProductButton";
import { useRouter } from "next/router";
import Image from "next/image";
import { Images } from "../../models/Products";

const ProductList: React.FC<{
  title: string;
  description: string;
  image: Images;
  category: string;
  isNew: boolean;
  slug: string;
}> = (props) => {
  const { title, description, image, category, isNew, slug } = props;
  const router = useRouter();
  const action = () => {
    router.push(`/${category}/${slug}`);
  };
  const newProduct = isNew && <p className={classes.new}>New Product</p>;
  return (
    <>
      <div className={classes.wrapper}>
        <ProductCard>
          <ul className={classes.ulist}>
            <li className={classes.list}>
              <div className={classes.container}>
                <div className={classes.content}>
                  {newProduct}
                  <h1 className={classes.title}>{title}</h1>
                  <p className={classes.text}>{description}</p>
                  <div className={classes.actions}>
                    <ProductButton name={"see product"} action={action} />
                  </div>
                </div>
               
                  <Image
                    className={classes.desktop}
                    src={image.desktop}
                    alt={title}
                    width={555}
                    height={560}
                  />
                    <Image
                    className={classes.tablet}
                    src={image.tablet}
                    alt={title}
                    width={689}
                    height={352}
                  />
                    <Image
                    className={classes.mobile}
                    src={image.mobile}
                    alt={title}
                    width={327}
                    height={352}
                  />
                
              </div>
            </li>
          </ul>
        </ProductCard>
      </div>
    </>
  );
};

export default ProductList;
