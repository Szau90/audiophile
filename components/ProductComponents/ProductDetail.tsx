import BestGear from "../BestGear";
import Categories from "../Categories";
import classes from "./ProductDetail.module.css";
import BoxIncludes from "../BoxIncludes";
import Gallery from "../Gallery";
import Others from "../Others";
import ProductItem from "./ProductItem";
import { Includes, OthersList } from "../../models/Products";

const ProductDetail: React.FC<{
  cartImg: string;
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
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
  } = props;
  return (
    <>
      <ProductItem
        id={id}
        title={title}
        description={description}
        price={price}
        image={image}
        cartImg={cartImg}
        shortName={shortName}
        category={category}
      />
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <div className={classes.features}>
            <h1>Features</h1>
            <p>{features}</p>
          </div>
          <div className={classes.includes}>
            <h1>In the box</h1>
            <BoxIncludes includes={includes} />
          </div>
        </div>
      </div>

      <Gallery gallery={gallery} />
      <Others others={others} />
      <Categories />
      <BestGear />
    </>
  );
};

export default ProductDetail;
