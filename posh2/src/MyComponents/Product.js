import React, { useEffect, useState } from "react";
import { Navbar1 } from "../Includes/Navbar1";
import { Getupdates } from "../Includes/Getupdates";
import { Footer } from "../Includes/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Product = () => {
  var loggedinClient
  if(sessionStorage.Username===undefined){
    loggedinClient="notlogedin"
  }else{
    loggedinClient=JSON.parse(sessionStorage.Username)
  }
  const location = useLocation();
  var [size, setSize] = useState("");
  const [buttonCondition, setButtonCondition] = useState(true);
  const [clientlist, setclientlist] = useState([]);
  const [cartDetails, setcartDetails] = useState([]);
  var data = location.state;
  data.size = size;
  const getClientlist = () => {
    const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL_C, REACT_APP_PROD_URL_C } = process.env;
  
    const url = `${devEnv ? REACT_APP_DEV_URL_C: REACT_APP_PROD_URL_C}`;

    console.log("2")
    fetch(url)
      .then((response) => response.json())
      .then((allClient) => setclientlist(allClient));
      console.log("3",clientlist)
  };
  useEffect(() => {
    getClientlist();
    console.log("1")
  }, [true]);
  var arrayOfCartItem = []

  const viewCart = () => {
    const notify = () => toast("Please register or login!");
    const notify1 = () => toast("Please select a size!");
    if(sessionStorage.Username===undefined){
      notify();
    }else{
      if (data.size === "") {
        notify1();
      } else {
        console.log("checking use effect",clientlist)
        var presentClient = clientlist.find(
          (val) => val.id === loggedinClient.id
        );
        console.log("presentClient.cartItem.length", presentClient.cartItem.length);
        data.qty = 1;
        if (presentClient.cartItem.length === 0) {
          
          arrayOfCartItem[0]=data;
          presentClient.cartItem = arrayOfCartItem;
          console.log("loggedinClient.id", loggedinClient.id);
          console.log("presentClient.cartItem", presentClient.cartItem);
          const devEnv = process.env.NODE_ENV !== "production";
    const { REACT_APP_DEV_URL_C, REACT_APP_PROD_URL_C } = process.env;
          const url = `${devEnv ? REACT_APP_DEV_URL_C: REACT_APP_PROD_URL_C}/${presentClient.id}`;
          axios
            .put(url, presentClient)
              .then((response) => setButtonCondition(false),setcartDetails(presentClient))}
         else {
           
           var result = presentClient.cartItem.find((val) => val.id === data.id && val.size === data.size)
           if(result){
            var count = -1;
            presentClient.cartItem.map(function (item) {
              if (item.id === data.id && item.size === data.size) {
                item.qty = item.qty + 1;
              }
              count += 1
              arrayOfCartItem[count] = item;
            });
           }else{
             var count1 = presentClient.cartItem.length;
             arrayOfCartItem = presentClient.cartItem;
              arrayOfCartItem[count1]=data
           }
          presentClient.cartItem = arrayOfCartItem;
          console.log(loggedinClient.id);
          console.log(presentClient.cartItem);
          const devEnv = process.env.NODE_ENV !== "production";
          const { REACT_APP_DEV_URL_C, REACT_APP_PROD_URL_C } = process.env;
                const url = `${devEnv ? REACT_APP_DEV_URL_C: REACT_APP_PROD_URL_C}/${presentClient.id}`;
          axios
            .put(url, presentClient)
            .then((response) => setButtonCondition(false),setcartDetails(presentClient));
        }
        
      }
    }
  };
  const navigate = useNavigate();
  const goToCart = () => {
    console.log(cartDetails)
    navigate("/cart", {state:cartDetails});
  };
  return (
    <div>
      {console.log("4")}
      <Navbar1 />
      <div className="product-container">
        <div className="product-image">
          <img
            src={require("../Images/" +
              location.state.brand +
              "/" +
              location.state.image)}
            alt="loading..."
            className="product-img"
          />
        </div>
        <div className="product-info">
          <h1 style={{ fontWeight: "300", color: "goldenrod" }}>
            {location.state.name}
          </h1>
          <p className="product-desc">{location.state.desc}</p>
          <span className="product-price">{location.state.price}</span>
          <div className="product-filtercontainer">
            <div className="product-filtercontainer1">
              <span className="product-filtertitle">Size:</span>
              <select
                className="product-filtersize"
                onChange={(obj) => setSize(obj.target.value)}
                defaultValue={"Select"}
              >
                <option value="Select" disabled>Select</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
          </div>
          {console.log("5")}
          {buttonCondition ? (
            <button className="product-button" onClick={viewCart}>
              Add To Cart
            </button>
          ) : (
            <button className="product-button" onClick={goToCart}>
              View Cart
            </button>
          )}
        </div>
      </div>
      {console.log("6")}
      <Getupdates />
      <Footer />
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </div>
  );
};
