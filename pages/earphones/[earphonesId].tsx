import Head from "next/head";
import ProductDetail from "../../components/ProductComponents/ProductDetail";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Products from "../../models/Products";
import { useRouter } from "next/router";

const EarPhonesDetailPage = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const earphonesId = router.query.earphonesId;

  const earphoneDetail = products
    .filter((f) => f.slug === earphonesId)
    .map((item, index) => (
      <ProductDetail
        key={index}
        id={item.id}
        title={item.name}
        description={item.description}
        price={item.price}
        image={item.image}
        category={item.category}
        features={item.features}
        gallery={item.gallery}
        includes={item.includes}
        others={item.others}
        cartImg={item.cartImg}
        shortName={item.shortName}
        categoryImages={item.categoryImage}
      />
    ));

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
      {earphoneDetail}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { earphonesId: "yx1-earphones" } }],
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
    revalidate:1
  };
};

export default EarPhonesDetailPage;
