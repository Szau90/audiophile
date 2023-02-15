import classes from "./ShopButton.module.css";
import React from "react";


const ShopButton: React.FC<{onClick:()=>void}> = (props) => {

  const handleClick = (e:React.MouseEvent)=> {
    e.preventDefault()
    props.onClick()
  }
  return (
  
      <button onClick={handleClick} className={classes.shopButton}>
       SHOP {''}
        <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.322 1l5 5-5 5"
            stroke="#D87D4A"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
     
      </button>
  
  );
};

export default ShopButton;
