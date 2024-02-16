import Head from "next/head";
import Checkout from "../../components/CheckoutComponents/Checkout";
import { useAppSelector } from "../../Hooks/hooks";
import EmptyCart from "../../components/CheckoutComponents/EmptyCart";

const CheckoutPage = () => {

  const cartItems = useAppSelector((state) => state.cart.items);
  const showCheckout = cartItems.length !== 0;

  return (
    <>
      <Head>
        <title>Frontend Mentor | Audiophile e-commerce website</title>
        <meta name="description" content="Check our amaizing earphones"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
      </Head>
      {showCheckout && <Checkout />}
      {!showCheckout && <EmptyCart />}
    </>
  );
};

export default CheckoutPage;
