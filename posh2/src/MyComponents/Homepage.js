import React from "react";
import { Button, Carousel } from "react-bootstrap";

import { Footer } from "../Includes/Footer";
import { Navbar1 } from "../Includes/Navbar1";
import { Getupdates } from "../Includes/Getupdates";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export const Homepage = () => {
  const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL_D, REACT_APP_PROD_URL_D } = process.env;
  const url = (`${devEnv ? REACT_APP_DEV_URL_D : REACT_APP_PROD_URL_D}`)
  const [det, setDet] = useState([]);
  const getDet = () => {
    fetch(url)
      .then((response) => response.json())
      .then((allDet) => setDet(allDet));
  };

  useEffect(() => {
    getDet();
  },[true]);
  
  var arrayBanner = det.filter(val => val.brand=== "Banner")  
  var arrayCategory = det.filter(val => val.brand=== "Category")  
  var arrayProducts = det.filter(val => val.brand=== "products") 
  // const location=useLocation()
  // var status = location.state
  return (
    <div>
      {/* Code for Navbar */}

      <Navbar1 />
      {/* Code for Carousel */}
      <Carousel fade className="carousel p-4">
        {arrayBanner.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <Link to="/productlist" state={item.variety}>
                <img src={require("../Images/"+item.image)} alt={item.alt} />
              </Link>
            </Carousel.Item>
          );
        })}
      </Carousel>
      {/* Code for categories */}
      <div className="category-container">
        {arrayCategory.map((item) => {
          return (
            <div className="category-item" key={item.id}>
              <Link to="/productlist" state={item.variety}>
              <img
                className="category-img"
                src={require("../Images/"+item.image)}
                alt="loading..."
              />
              </Link>
              {/* <div className="category-info">
              <Link to="/productlist" state={item.variety}>
              <Button className="category-button" variant="secondary">Shop Now
                </Button>
              </Link>  
              </div> */}
            </div>
          );
        })}
      </div>
      {/* <div className="products-container">
        {arrayCategory.map((item) => {
          return (
            <div className="products-item" key={item.id}>
              <img
                className="products-img d-block w-100"
                src={require("../Images/"+item.image)}
                alt="loading..."
              />
              <div className="category-info">
              <Link to="/productlist" state={item.variety}>
              <Button className="category-button" variant="secondary">Shop Now
                </Button>
              </Link>  
              </div>
            </div>
          );
        })}
      </div> */}
      {/* Code for products  */}
      <div className="products-container">
        {arrayProducts.map((item) => {
          return (
            <div className="products-item" key={item.id}>
            <Link to="/productlist" state={item.variety}>
              <img
                  className="products-img"
                  src={require("../Images/"+item.image)}
                  alt="loading..."
                />
            </Link>
            </div>
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
