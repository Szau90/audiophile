import Link from "next/link";
import classes from "./BlackBorderBtn.module.css";

import { Manrope } from "@next/font/google";

const manrope = Manrope({ subsets: ["latin"] });
const BlackBorderBtn: React.FC<{ link: string }> = ({link}) => {
  return (
    <div className={`${classes.blackBorderBtn} ${manrope.className}`}>
      <Link href={link}>See Product</Link>
    </div>
  );
};

export default BlackBorderBtn;
