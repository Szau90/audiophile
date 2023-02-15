import Head from "next/head";
import Categories from "../components/Categories";
import ZX9Speaker from "../components/HomePageComponents/ZX9Speaker";
import ZX7Speaker from "../components/HomePageComponents/ZX7Speaker";
import YX1Earphone from "../components/HomePageComponents/YX1Earphone";
import BestGear from "../components/BestGear";
import XX99Headphone from "../components/HomePageComponents/XX99Headphone";
import Cart from "../components/Cart/Cart";
import { useAppSelector } from "../Hooks/hooks";

const Home = () => {
  const showCart = useAppSelector((state) => state.ui.cartIsVisible);
  return (
    <>
      <Head>
        <title>Frontend Mentor | Audiophile e-commerce website</title>
        <meta name="description" content="Home Page"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
      </Head>

      {showCart && <Cart />}

      <XX99Headphone />

      <Categories />

      <ZX9Speaker />

      <ZX7Speaker />

      <YX1Earphone />

      <BestGear />
    </>
  );
};

export default Home;
