import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";

export const Footer = () => {
  return (
    
      <div className="footer-container">
        <div className="footer-left">
          <h1>POSH.</h1>
          <p className="footer-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="footer-socialcontainers">
            <div className="footer-socialcontainer bg-custom1">
              <Facebook />
            </div>
            <div className="footer-socialcontainer bg-custom2">
              <Instagram />
            </div>
            <div className="footer-socialcontainer bg-custom3">
              <Twitter />
            </div>
          </div>
        </div>
        <div className="footer-center">
          <h3 style={{ margin: "20px 0" }}>Useful Link</h3>
          <ul className="footer-list">
            <li className="footer-listitem">Home</li>
            <li className="footer-listitem">Man Fashion</li>
            <li className="footer-listitem">Accessories</li>
            <li className="footer-listitem">Order Tracking</li>
            <li className="footer-listitem">Wishlist</li>
            <li className="footer-listitem">Cart</li>
            <li className="footer-listitem">Woman Fashion</li>
            <li className="footer-listitem">My Account</li>
            <li className="footer-listitem">Terms</li>
          </ul>
        </div>
        <div className="footer-right">
          <h3 style={{ margin: "20px 0" }}>Contact</h3>
          <div className="footer-contactitem">
            <Room style={{ marginRight: "10px" }} /> Berhampur, Odisha, India
          </div>
          <div className="footer-contactitem">
            <Phone style={{ marginRight: "10px" }} /> +91 XXXXXXXXXX
          </div>
          <div className="footer-contactitem">
            <Mail style={{ marginRight: "10px" }} /> contact@posh.com
          </div>
        </div>
      </div>
    
  );
};
