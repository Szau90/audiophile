import classes from "./Gallery.module.css";
import Image from "next/image";

const Gallery: React.FC<{
  gallery: {
    first: string;
    second: string;
    third: string;
  };
}> = ({ gallery }) => {
  const firstImg = gallery.first;
  const secondImg = gallery.second;
  const thirdImg = gallery.third;

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.gallery}>
          <div className={classes.firstGalleryCol}>
            <Image src={firstImg} alt="" width={450} height={280} />
            <Image src={secondImg} alt="" width={450} height={280} />
          </div>
          <div className={classes.secondGalleryCol}>
            <Image src={thirdImg} alt="" width={625} height={592} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
