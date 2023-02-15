import ProductCard from "../../UI/ProductCard";
import classes from "./ProductList.module.css";
import ProductButton from "../UI/ProductButton";
import { useRouter } from "next/router";
import Image from "next/image";

const ProductList: React.FC<{
  title: string;
  description: string;
  image: string;
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
                <div className={`${classes.image} ${classes.item}`}>
                  <Image className={classes.img} src={image} alt={title} />
                </div>
              </div>
            </li>
          </ul>
        </ProductCard>
      </div>
    </>
  );
};

export default ProductList;
