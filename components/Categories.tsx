import classes from "./Categories.module.css";
import ShopButton from "./UI/ShopButton";
import { useRouter } from "next/router";
import { useAppSelector } from "../Hooks/hooks";
import Image from "next/image";

const Categories = () => {
  const showNavBar = useAppSelector((state) => state.ui.navbarOpen);

  const router = useRouter();

  const handleHeadPhonesClick = () => {
    router.push("/headphones");
  };
  const handleSpeakersClick = () => {
    router.push("/speakers");
  };
  const handleEarPhonesClick = () => {
    router.push("/earphones");
  };

  return (
    <>
      <div
        className={showNavBar ? classes.flexContainer : classes.flexContainer}
      >
        <div className={classes.container}>
          <div className={classes.wrapper}>
            <div className={classes.headphones}>
              <Image
                className={classes.image}
                src="/images/image-category-thumbnail-headphones.png"
                alt="headphones"
                width={220}
                height={200}
              />

              <h3 className={classes.catTitle}>Headphones</h3>
              <div className={classes.shopBtn}>
                <ShopButton onClick={handleHeadPhonesClick} />
              </div>
            </div>
          </div>
          <div className={classes.wrapper}>
            <div className={classes.speakers}>
              <Image
                className={classes.image}
                src="/images/image-category-thumbnail-speakers.png"
                alt="speakers"
                width={220}
                height={200}
              />

              <h3 className={classes.catTitle}>Speakers</h3>
              <div className={classes.shopBtn}>
                <ShopButton onClick={handleSpeakersClick} />
              </div>
            </div>
          </div>
          <div className={classes.wrapper}>
            <div className={classes.earphones}>
              <Image
                className={classes.image}
                src="/images/image-category-thumbnail-earphones.png"
                alt="earphones"
                width={220}
                height={200}
              />

              <h3 className={classes.catTitle}>Earphones</h3>
              <div className={classes.shopBtn}>
                <ShopButton onClick={handleEarPhonesClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
