import classes from "./Summary.module.css"

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
        <img src={cartImg} alt={title} />
      </div>
      <div className={classes.sumContent}>
        <h4>{title}</h4>
        <p>${price}</p>
      </div>
      <div className={classes.sumQty}>
      <p>x {''} {quantity}</p>
      </div>
      </div>
      </li>
    </>
  );
};

export default Summary;
