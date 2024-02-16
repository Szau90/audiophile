import classes from "./Categories.module.css";
import ShopButton from "./UI/ShopButton";
import { useRouter } from "next/router";
import Image from "next/image";

const Categories = () => {
 

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
     <div className={classes.container}>
        <div className={classes.menu_item}>
          <Image
            src={"/images/image-category-thumbnail-headphones.png"}
            alt={"headphones"}
            className={classes.item_image}
            width={140}
            height={160}
          />

          <h3 className={classes.item_title}>Headphones</h3>
          <div className={classes.cta_btn}>
            <ShopButton onClick={handleHeadPhonesClick} />
          </div>
        </div>

        <div className={classes.menu_item}>
          <Image
            src={"/images/image-category-thumbnail-speakers.png"}
            alt={"speakers"}
            className={classes.item_image}
            width={140}
            height={160}
            priority
          />

          <h3 className={classes.item_title}>Speakers</h3>
          <div className={classes.cta_btn}>
            <ShopButton onClick={handleSpeakersClick} />
          </div>
        </div>

        <div className={classes.menu_item}>
          <Image
            src={"/images/image-category-thumbnail-earphones.png"}
            alt={"earphones"}
            className={classes.item_image}
            width={140}
            height={140}
          />

          <h3 className={classes.item_title}>Earphones</h3>
          <div className={classes.cta_btn}>
            <ShopButton onClick={handleEarPhonesClick} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
