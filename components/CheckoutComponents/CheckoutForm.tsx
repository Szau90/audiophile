import React from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import CashOnDelivery from "./CashOnDelivery";
import classes from "./CheckoutForm.module.css";
import { uiActions } from "../../store/ui-slice";
import Orders from "../../models/Orders";

const CheckoutForm: React.FC<{ onOrder: (orderData: Orders) => void }> = ({
  onOrder,
}) => {
  const nameInputRef = React.useRef<HTMLInputElement>(null);
  const emailInputRef = React.useRef<HTMLInputElement>(null);
  const phoneInputRef = React.useRef<HTMLInputElement>(null);
  const addressInputRef = React.useRef<HTMLInputElement>(null);
  const zipCodeInputRef = React.useRef<HTMLInputElement>(null);
  const cityInputRef = React.useRef<HTMLInputElement>(null);
  const countryInputRef = React.useRef<HTMLInputElement>(null);
  const eMoneyInputRef = React.useRef<HTMLInputElement>(null);
  const cashInputRef = React.useRef<HTMLInputElement>(null);
  const eMoneyNumberInputRef = React.useRef<HTMLInputElement>(null);
  const eMoneyPinInputRef = React.useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const orderData = {
      name: nameInputRef.current!.value,
      email: emailInputRef.current!.value,
      phone: phoneInputRef.current!.value,
      address: addressInputRef.current!.value,
      zipcode: zipCodeInputRef.current!.value,
      city: cityInputRef.current!.value,
      country: countryInputRef.current!.value,
      eMoney: eMoneyInputRef.current!.value,
      cash: cashInputRef.current!.value,
      emoneyNumber: eMoneyNumberInputRef.current!.value,
      emoneyPin: eMoneyPinInputRef.current!.value,
    };
    onOrder(orderData);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const showCashOnDelivery = useAppSelector((state) => state.ui.cashOnDelivery);

  const dispatch = useAppDispatch();

  const toogleCashHandler = () => {
    dispatch(uiActions.toogleCash());
  };

  return (
    <>
      <div className={classes.checkoutBox}>
        <h1> Checkout </h1>

        <h4>Billing details</h4>
        <form id="OrderForm" className={classes.form} onSubmit={submitHandler}>
          <div className={classes.inputGrp}>
            <div className={classes.control}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required ref={nameInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" required ref={emailInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="phone">Phone number</label>
              <input type="tel" id="phone" required ref={phoneInputRef} />
            </div>
          </div>

          <h4>Shipping details</h4>

          <div className={classes.address}>
            <label>Address</label>
            <input type="text" required ref={addressInputRef} />
          </div>
          <div className={classes.inputGrp}>
            <div className={classes.control}>
              <label htmlFor="zipcode">Zip Code</label>
              <input
                type="number"
                id="zipcode"
                required
                ref={zipCodeInputRef}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="city">City</label>
              <input type="text" id="city" required ref={cityInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="country">Country</label>
              <input type="text" id="country" required ref={countryInputRef} />
            </div>
          </div>

          <h4>Payment details</h4>

          <div className={classes.payment}>
            <label htmlFor="emoney">Payment method</label>
          </div>
          <div className={classes.radioGrp}>
            <div className={classes.radio}>
              <input
                onChange={toogleCashHandler}
                name="payment"
                type="radio"
                id="emoney"
                value="e-Money"
                checked={!showCashOnDelivery}
                required
                ref={eMoneyInputRef}
              />
              <label htmlFor="emoney">e-Money</label>
            </div>
            <div className={classes.radio}>
              <input
                onChange={toogleCashHandler}
                checked={showCashOnDelivery}
                name="payment"
                type="radio"
                id="cash"
                value="Cash on Delivery"
                required
                ref={cashInputRef}
              />
              <label htmlFor="cash">Cash on Delivery</label>
            </div>
          </div>
          <div className={classes.inputGrp}>
            <div className={classes.control}>
              <label htmlFor="emoneynumber">e-Money number</label>
              <input
                type="number"
                id="emoneynumber"
                required
                ref={eMoneyNumberInputRef}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="emoneypin">e-Money Pin</label>
              <input
                type="number"
                id="emoneypin"
                required
                ref={eMoneyPinInputRef}
              />
            </div>
          </div>
          {showCashOnDelivery && <CashOnDelivery />}
        </form>
      </div>
    </>
  );
};

export default CheckoutForm;
