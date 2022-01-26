import { Send } from "@material-ui/icons";
import React from "react";

export const Getupdates = () => {
  return (
    <div>
      <div className="news-container">
        <h2 className="news-title">Hear from us</h2>
        <p className="news-desc">
          Get timely updates for your favorite products
        </p>
        <section className="news-inputContainer">
          <input
            type="email"
            className="news-email"
            placeholder="Enter email"
          ></input>
          <button className="news-button">
            <Send />
          </button>
        </section>
      </div>
    </div>
  );
};
