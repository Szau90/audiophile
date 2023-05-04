import Link from "next/link";
import classes from "./BlackProductButton.module.css";
import { Manrope } from "@next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

const BlackProductButton: React.FC<{ link: string }> = ({ link }) => {
  return (
    <div className={`${classes.blackBtn} ${manrope.className}`}>
      <Link href={link}>See Product</Link>
    </div>
  );
};

export default BlackProductButton;
