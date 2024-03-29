import Head from "next/head";
import ProductDetail from "../../components/ProductComponents/ProductDetail";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Products from "../../models/Products";
import { useRouter } from "next/router";

const SpeakersDetailPage = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const speakersId = router.query.speakersId;

  const speakerDetail = products
    .filter((f) => f.slug === speakersId)
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
        <meta name="description" content="Check our amaizing speakers"></meta>
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
      {speakerDetail}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    "https://audiophile-af1e7-default-rtdb.europe-west1.firebasedatabase.app/ProdList.json"
  );
  const result: Products[] = await res.json();

  const paths = result.map((item) => ({
    params: { speakersId: item.slug },
  }));

  return { paths, fallback: "blocking" };
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

export default SpeakersDetailPage;
