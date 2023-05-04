import Card from "../../UI/Card";
import classes from "./ConfirmationModal.module.css";
import { useAppSelector, useAppDispatch } from "../../Hooks/hooks";
import ProductButton from "../UI/ProductButton";
import { cartActions } from "../../store/cart-slice";
import { useRouter } from "next/router";
import SummaryItems from "./SummaryItems";
import { uiActions } from "../../store/ui-slice";
import Image from "next/image";

const ConfirmationModal: React.FC<{ grandTotal: number }> = ({
  grandTotal,
}) => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const showItems = useAppSelector((state) => state.ui.showItems);

  const title = cartItems[0].shortName;
  const qty = cartItems[0].quantity;
  const price = cartItems[0].price;
  const itemLeft = cartItems.length - 1;
  const cartImg = cartItems[0].cartImg;

  const moreItems = cartItems
    .filter((cartItems, index) => index > 0)
    .map((i) => (
      <SummaryItems
        key={i.id}
        title={i.shortName}
        cartImg={i.cartImg}
        price={i.price}
        qty={i.quantity}
      />
    ));

  const dispatch = useAppDispatch();
  const router = useRouter();

  const action = () => {
    router.push("/");
    dispatch(cartActions.removeAllItem());
    dispatch(uiActions.toogleModal());
  };
  const moreItemHandler = () => {
    dispatch(uiActions.toogleItems());
  };

  return (
    <>
      <div className={classes.modalWrapper}>
        <Card>
          <div className={classes.header}>
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <circle fill="#D87D4A" cx="32" cy="32" r="32" />
                <path
                  stroke="#FFF"
                  strokeWidth="4"
                  d="m20.754 33.333 6.751 6.751 15.804-15.803"
                />
              </g>
            </svg>

            <h1>
              Thank you <br />
              for your order
            </h1>

            <p>You will recive an e-mail confirmation shortly.</p>
          </div>
          <div className={classes.wrapper}>
            <div className={classes.container}>
              <div className={classes.firstCol}>
                <div className={classes.item}>
                  <div className={classes.firstItem}>
                    <div>
                      <Image
                        src={cartImg}
                        alt={title}
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className={classes.firstItemContent}>
                      <h3>{title}</h3>
                      <p>${price}</p>
                    </div>
                    <div>
                      <p>x{qty}</p>
                    </div>
                  </div>

                  {showItems && moreItems}
                </div>
                <div className={classes.showMore}>
                  <button
                    className={classes.itemLeft}
                    onClick={moreItemHandler}
                  >
                    {!showItems && <p> and {itemLeft} other item(s) left</p>}
                    {showItems && <p>View less</p>}
                  </button>
                </div>
              </div>
              <div className={classes.secondCol}>
                <div>
                  <h3>Grand Total</h3>
                  <p>$ {grandTotal.toFixed(0)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.homeBtn}>
            <div>
              <ProductButton name={"Back to home"} action={action} />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ConfirmationModal;
