import classes from "./Checkout.module.css";
import { useAppSelector, useAppDispatch } from "../../Hooks/hooks";
import Summary from "./Summary";
import CheckoutForm from "./CheckoutForm";
import ConfirmationModal from "./ConfirmationModal";
import { uiActions } from "../../store/ui-slice";
import OrderBtn from "../UI/OrderBtn";
import Orders from "../../models/Orders";
import Link from "next/link";

const Checkout = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const showConfirmationModal = useAppSelector((state) => state.ui.showModal);

  const dispatch = useAppDispatch();

  const totalPice = cartItems.map((p) => p.totalPrice);
  const total = totalPice.reduce((a, b) => a + b, 0);
  const vat = total * 0.2;
  const grandTotal = total + vat + 50;

  const placeOrder = async (enteredorderData: Orders) => {
    try {
      const respone = await fetch(
        "https://audiophile-af1e7-default-rtdb.europe-west1.firebasedatabase.app/Orders.json",
        {
          method: "POST",
          body: JSON.stringify(enteredorderData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch(uiActions.toogleModal());

      if (!respone.ok) {
        throw new Error("Failed to send order!");
      }

      const data: Orders = await respone.json();
      return data;
    } catch (error) {
      throw new Error("Failed to send order!");
    }
  };
  const backdropClickHandler = () => {
    dispatch(uiActions.toogleModal());
  };
  return (
    <>
      {showConfirmationModal && (
        <div className={classes.blackdrop} onClick={backdropClickHandler}></div>
      )}
      <Link href={"/"} className={classes.link}>
        Go Back
      </Link>
      <div className={classes.container}>
        <div className={classes.checkoutForm}>
          <CheckoutForm onOrder={placeOrder} />
        </div>
        <div className={classes.summary}>
          <h3>Summary</h3>
          <ul>
            {cartItems.map((item) => (
              <Summary
                key={item.id}
                id={item.id}
                title={item.shortName}
                price={item.price}
                totalPrice={item.totalPrice}
                quantity={item.quantity}
                cartImg={item.cartImg}
              />
            ))}
          </ul>
          <table className={classes.details}>
            <tbody>
              <tr>
                <th>Total</th>
                <td>${total}</td>
              </tr>
              <tr>
                <th>Shipping</th>
                <td>$50</td>
              </tr>
              <tr>
                <th>VAT (included)</th>
                <td>${vat.toFixed(0)}</td>
              </tr>
              <tr>
                <th>Grand total</th>
                <td className={classes.highlighted}>
                  ${grandTotal.toFixed(0)}
                </td>
              </tr>
            </tbody>
          </table>
          <OrderBtn name={"order and pay"} />
        </div>
      </div>
      <div className={classes.modal}>
        {showConfirmationModal && <ConfirmationModal grandTotal={grandTotal} />}
      </div>
    </>
  );
};

export default Checkout;
