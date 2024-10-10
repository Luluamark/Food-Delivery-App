import React from "react";
import "./Header.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <h2>
          Order your favourite food here
          <Cursor />
        </h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary to satisfy your
          cravings and elevate your dining experience, one delicious meal at a
          time
        </p>

        <button>View Menu</button>
      </div>
    </div>
  );
}
