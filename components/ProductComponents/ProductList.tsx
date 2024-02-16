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

  return (
    <>
      <li className={classes.container}>
        <div className={classes.image_container}>
          <Image src={image.desktop} alt={title} fill style={{borderRadius: '10px'}} />
        </div>
        <div className={classes.content}>
          {isNew && <p className={classes.new}>New Product</p>}
          <h1>{title}</h1>
          <p className={classes.description}>{description}</p>
          <ProductButton name={"see product"} action={action} />
        </div>
      </li>
    </>
  );
};

export default ProductList;
