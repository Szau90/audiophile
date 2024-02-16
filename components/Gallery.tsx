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
      <div className={classes.container}>
        <div className={classes.item_1}>
          <Image
            src={firstImg}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ borderRadius: "10px" ,objectFit: 'cover'}}
            priority
          />
        </div>
        <div className={classes.item_2}>
          <Image
            src={secondImg}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ borderRadius: "10px" ,objectFit: 'cover'}}
            priority
          />
        </div>
        <div className={classes.item_3}>
          <Image
            src={thirdImg}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ borderRadius: "10px" ,objectFit: 'cover'}}
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
