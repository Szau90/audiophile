import Head from "next/head";
import ProductDetail from "../../components/ProductComponents/ProductDetail";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Products from "../../models/Products";
import Cart from "../../components/Cart/Cart";
import { useRouter } from "next/router";
import { useAppSelector } from "../../Hooks/hooks";

const HeadphonesDetailPage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const showCart = useAppSelector((state) => state.ui.cartIsVisible);


  const headphonesId = router.query.headphonesId;
  let key: number 
  switch (headphonesId) {
    
    case "xx59-headphones":
      key = 1;
      break;
    case "xx99-mark-one-headphones":
      key = 2;
      break;
    case "xx99-mark-two-headphones":
      key = 3;
      break;
    
  }

  return (
    <>
     <Head>
        <title>Frontend Mentor | Audiophile e-commerce website</title>
        <meta name="description" content="Check our amaizing headphones"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
      </Head>
    {showCart && <Cart />}
    <ProductDetail
      id={products[key!].id}
      title={products[key!].name}
      description={products[key!].description}
      price={products[key!].price}
      image={products[key!].image}
      category={products[key!].category}
      features={products[key!].features}
      gallery={products[key!].gallery}
      includes={products[key!].includes}
      others={products[key!].others}
      cartImg={products[key!].cartImg}
      shortName={products[key!].shortName}
    />
    </>
 

  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
     
      { params: { headphonesId: "xx59-headphones" } },
      { params: { headphonesId: "xx99-mark-one-headphones" } },
      { params: { headphonesId: "xx99-mark-two-headphones" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  products: Products[];
}> = async () => {
  const res = await fetch(
    "https://audiophile-af1e7-default-rtdb.europe-west1.firebasedatabase.app/ProdList.json"
  );
  const products: Products[] = await res.json();

  return {
    props: {
      products,
    },
  };
};

export default HeadphonesDetailPage;