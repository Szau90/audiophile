import classes from "./Gallery.module.css";

const Gallery: React.FC<{
  gallery: {
    first: string;
    second: string;
    third: string;
  };
}> = (props) => {
  const firstImg = props.gallery.first;
  const secondImg = props.gallery.second;
  const thirdImg = props.gallery.third;

  return (
    <>
    <div className={classes.wrapper}>
      <div className={classes.gallery}>
        <div className={classes.firstGalleryCol}>
          <img src={firstImg} alt="" />

          <img src={secondImg} alt="" />
        </div>
        <div className={classes.secondGalleryCol}>
          <img src={thirdImg} alt="" />
        </div>
      </div>
      </div>
    </>
  );
};

export default Gallery;
