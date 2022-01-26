import React from "react";
import { Footer } from "../Includes/Footer";
import { Navbar1 } from "../Includes/Navbar1";
import { Getupdates } from "../Includes/Getupdates";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Productlist = () => {
  const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL_D, REACT_APP_PROD_URL_D } = process.env;
        const url = `${devEnv ? REACT_APP_DEV_URL_D: REACT_APP_PROD_URL_D}`;
  const [det, setDet] = useState([]);
  const getDet = () => {
    fetch(url)
      .then((response) => response.json())
      .then((allDet) => setDet(allDet));
  };
  useEffect(() => {
    getDet();
    
  },[true]);

  const location = useLocation()
  var pro = det.filter(val => val.brand=== location.state)  
  return (
    <div>
      {/* Code for Navbar */}
      <Navbar1 />
      {/* Code for samples  */}
      <div className="samples-container">
        {pro.map((item) => {
          return (
            <Link to="/product" state={item}>
              <div className="samples-item" key={item.id}>
              <img
                  className="samples-img d-block w-100"
                  src={require("../Images/"+item.brand+"/"+item.image)}
                  alt="loading..."
                />
                <div className="samples-info"><p style={{color: "goldenrod"}}>{item.name}</p>
                <p>{item.desc}</p>
                <p><b>{item.price}</b></p></div>
            </div>
            </Link>
          );
        })}
      </div>
      {/* Code for newsletter  */}
      <Getupdates />
      {/* Code for footer  */}
      <Footer />
    </div>
  );
};
