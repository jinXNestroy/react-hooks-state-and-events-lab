import React from "react";
import { useState } from "react";


function Item({ name, category }) {
  const [cart, setCart] = useState("")
  const [buttonDisplay, setButtonDisplay] = useState("Add to Cart")

  function handleClick() {



    setCart((prevcart) => {
      if (prevcart === "") {
        setButtonDisplay("Remove From Cart")
        return "in-cart"
      }
      else {
        setButtonDisplay("Add to Cart")
        return ""
      }
    })
  }

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonDisplay}</button>
    </li>
  );
}

export default Item;
