import classes from "./CategoryHeader.module.css";

const CategoryHeader: React.FC<{ category: string }> = ({ category }) => {
  return (
    <div className={classes.container}>
      <h1>{category}</h1>
    </div>
  );
};

export default CategoryHeader;
