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
  const showConfirmationModal = useAppSelector(state => state.ui.showModal)

  const dispatch = useAppDispatch()

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
  
        dispatch(uiActions.toogleModal())
  
      if (!respone.ok) {
        throw new Error("Failed to send order!");
      }
  
      const data: Orders = await respone.json();
      return data;
    } catch (error) {
      throw new Error("Failed to send order!");
    }
  };


  return (
    <>
    <div className={classes.checkoutPage}>
    <div className={classes.link}>
         <Link href={'/'}>Go Back</Link>
        </div>
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

          <div className={classes.total} >
            <div className={classes.label}>
              <p>Total</p>
              <p>Shipping</p>
              <p>VAT (included)</p>
              <p>Grand total</p>
            </div>
            <div className={classes.value}>
              <h4>${total}</h4>

              <h4>$50</h4>

              <h4>${vat.toFixed(0)}</h4>

              <h4>${grandTotal.toFixed(0)}</h4>
            </div>
          </div>
          <div className={classes.orderBtn}>
          <OrderBtn name={'order and pay'} />
          </div>
        </div>
      </div>
      <div className={classes.modal}>
      { showConfirmationModal && <ConfirmationModal grandTotal={grandTotal} />}
      </div>
      </div>

    </>
  );
};

export default Checkout;
