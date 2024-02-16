import Link from "next/link";
import classes from "./BlackBorderBtn.module.css";

import { Manrope } from "@next/font/google";

const manrope = Manrope({ subsets: ["latin"] });
const BlackBorderBtn: React.FC<{ link: string }> = ({ link }) => {
  return (
    <Link
      href={link}
      className={`${classes.blackBorderBtn} ${manrope.className}`}
    >
      See Product
    </Link>
  );
};

export default BlackBorderBtn;
