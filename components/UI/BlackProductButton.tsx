import Link from "next/link";
import classes from './BlackProductButton.module.css'




const BlackProductButton:React.FC<{link:string}> = (props) => {
return(<div className={classes.blackBtn}>
    <Link href={props.link}>See Product</Link>
    </div>
)
};

export default BlackProductButton;