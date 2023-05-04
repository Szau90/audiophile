import Head from "next/head";
import Products from "../../models/Products";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import BestGear from "../../components/BestGear";
import Categories from "../../components/Categories";
import CategoryHeader from "../../components/CategoryHeader";
import ProductList from "../../components/ProductComponents/ProductList";
import Cart from "../../components/Cart/Cart";
import { useAppSelector } from "../../Hooks/hooks";

const Earphones = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const showCart = useAppSelector((state) => state.ui.cartIsVisible);

  const earphones = products
    .filter((p) => p.category === "earphones")
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
    ));
  const category = products
    .filter((c) => c.category === "earphones")
    .map((c) => <CategoryHeader key={c.id} category={c.category} />);

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
      {showCart && <Cart />}
      {category}
      {earphones}
      <Categories />
      <BestGear />
    </>
  );
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

export default Earphones;
