import classes from "./Summary.module.css";
import Image from "next/image";

const Summary: React.FC<{
  title: string;
  totalPrice: number;
  quantity: number;
  price: number;
  id: number;
  cartImg: string;
}> = (props) => {
  const { title, quantity, price, cartImg } = props;
  return (
    <>
      <li>
        <div className={classes.container}>
          <Image src={cartImg} alt={title} width={80} height={80}  className={classes.item_image}/>
          <div className={classes.details}>
            <h4>{title}</h4>
            <p>${price}</p>
          </div>
          <p className={classes.qty}>x {quantity}</p>
        </div>
      </li>
    </>
  );
};

export default Summary;
