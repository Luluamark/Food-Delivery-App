import React, { useContext } from "react";
import "./TopMenuImg.css";
import { StoreContext } from "../Context/StoreContext";

export default function ToMenuImg() {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="banner-wrapper">
      <div className="wrapper">
        <div className="images">
          {food_list.map((item, i) => (
            <img key={i} src={item.image} alt="" />
          ))}
        </div>

        <div className="images">
          {food_list.map((item, i) => (
            <img key={i} src={item.image} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}
