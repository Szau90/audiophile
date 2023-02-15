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
        <div className={classes.sumWrapper}>
          <div className={classes.sumImg}>
            <Image src={cartImg} alt={title} 
             width={220}
             height={200}
              />
          </div>
          <div className={classes.sumContent}>
            <h4>{title}</h4>
            <p>${price}</p>
          </div>
          <div className={classes.sumQty}>
            <p>
              x {""} {quantity}
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export default Summary;
