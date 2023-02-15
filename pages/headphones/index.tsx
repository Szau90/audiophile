import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Products from "../../models/Products";
import CategoryHeader from "../../components/CategoryHeader";
import Categories from "../../components/Categories";
import BestGear from "../../components/BestGear";
import ProductList from "../../components/ProductComponents/ProductList";
import Cart from "../../components/Cart/Cart";
import { useAppSelector } from "../../Hooks/hooks";

const Headphones = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
 
  const showCart = useAppSelector((state) => state.ui.cartIsVisible);

 

  const headphones = products
    .filter((p) => p.category === "headphones")
    .map((product) => (
      <ProductList
        key={product.id}
        description={product.description}
        title={product.name}
        image={product.image}
        category={product.category}
        isNew={product.new}
        slug={product.slug}
      />
    ))
    .reverse();
  const category = products
    .filter((c) => c.category === "headphones" && c.id === 2)
    .map((c) => <CategoryHeader key={c.id} category={c.category} />);
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
      {category}
      {headphones}
      <Categories />
      <BestGear />
    </>
  );
};

export const getStaticProps: GetStaticProps<{ products: Products[] }> = async () => {
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

export default Headphones;
