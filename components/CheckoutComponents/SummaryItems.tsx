import classes from "./SummaryItems.module.css";
import Image from "next/image";

const SummaryItems: React.FC<{
  title: string;
  cartImg: string;
  price: number;
  qty: number;
}> = (props) => {
  const { title, cartImg, price, qty } = props;
  return (
    <>
      <div className={classes.item}>
        <div>
          <Image src={cartImg} alt={title} 
           width={100}
           height={100} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <p>${price}</p>
        </div>
        <div>
          <p className={classes.qty}>x{qty}</p>
        </div>
      </div>
    </>
  );
};

export default SummaryItems;
