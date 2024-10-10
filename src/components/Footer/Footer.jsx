import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <a href="#navbar">
            <img className="footer-log" src={assets.lulua} alt="" />
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            at consequuntur laborum iure, optio aliquid tempora explicabo libero
            est aut ipsam ipsa perspiciatis dolores nostrum facilis,
            necessitatibus rerum, labore ullam eos voluptatum natus asperiores?
          </p>

          <div className="social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+256 785300477</li>
            <li>luluamarkm@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        &copy; Copyright {new Date().getFullYear()} Lulua-tv - All Right
        Reserved
      </p>
    </div>
  );
}
