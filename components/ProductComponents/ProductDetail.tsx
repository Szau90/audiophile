import BestGear from "../BestGear";
import Categories from "../Categories";
import classes from "./ProductDetail.module.css";
import BoxIncludes from "../BoxIncludes";
import Gallery from "../Gallery";
import Others from "../Others";
import ProductItem from "./ProductItem";
import { Images, Includes, OthersList } from "../../models/Products";
import Link from "next/link";

const ProductDetail: React.FC<{
  cartImg: string;
  id: number;
  title: string;
  description: string;
  price: number;
  image: Images;
  category: string;
  features: string;
  gallery: {
    first: string;
    second: string;
    third: string;
  };
  includes: Includes[];
  others: OthersList[];
  shortName: string;
  categoryImages: Images;
}> = (props) => {
  const {
    id,
    title,
    image,
    description,
    price,
    cartImg,
    shortName,
    category,
    features,
    gallery,
    others,
    includes,
    categoryImages,
  } = props;
  return (
    <>
      <section className={classes.container}>
        <Link href={`/${category}`}>Go Back</Link>
        <ProductItem
          id={id}
          title={title}
          description={description}
          price={price}
          image={image}
          cartImg={cartImg}
          shortName={shortName}
          category={category}
          categoryImages={categoryImages}
        />

        <div className={classes.item_details}>
          <div className={classes.features}>
            <h1>Features</h1>
            <p>{features}</p>
          </div>
          <div className={classes.includes}>
            <h1>In the box</h1>
            <BoxIncludes includes={includes} />
          </div>
        </div>

        <Gallery gallery={gallery} />
        <Others others={others} />
        <Categories />
        <BestGear />
      </section>
    </>
  );
};

export default ProductDetail;
