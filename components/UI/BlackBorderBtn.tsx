import Link from "next/link";
import classes from './BlackBorderBtn.module.css'

const BlackBorderBtn:React.FC<{link:string}> = (props) => {
return(<div className={classes.blackBorderBtn}>
    <Link href={props.link}>See Product</Link>
    </div>
)
};

export default BlackBorderBtn;