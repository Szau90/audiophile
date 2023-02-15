import classes from './CategoryHeader.module.css'

const CategoryHeader: React.FC <{category: string}> = (props) => {
    return (
        <div className={classes.categoryContainer}>
            <h1>{props.category}</h1>
        </div>
    )
}

export default CategoryHeader;