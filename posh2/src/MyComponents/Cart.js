import React, { useEffect, useState } from "react";
import { Navbar1 } from "../Includes/Navbar1";
import { Getupdates } from "../Includes/Getupdates";
import { Footer } from "../Includes/Footer";
import { Add, Remove } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

export const Cart = () => {
  const location = useLocation();
  console.log(location.state.cartItem, "state");
  var [cartDetail, setcartDetail] = useState(location.state.cartItem);
  console.log(cartDetail, "cart");
  var cost = 0;
  {cartDetail.map((item)=>{
    var pr = item.price.split(" ")[1]
    var quan = item.qty
    cost += parseInt(pr,10)*parseInt(quan,10)
  })}
  // var loggedinClient
  // var [clientlist, setclientlist] = useState([])
  // var [cartdetails, setcartdetails] = useState([])
  // if(sessionStorage.Username==="undefined"){
  //   loggedinClient="notlogedin"
  // }else{
  //   loggedinClient=JSON.parse(sessionStorage.Username)
  // }
  // const devEnv = process.env.NODE_ENV !== "production";
  // const { REACT_APP_DEV_URL_C, REACT_APP_PROD_URL_C } = process.env;
  // const url = (`${devEnv ? REACT_APP_DEV_URL_C : REACT_APP_PROD_URL_C}`)
  // const [det, setDet] = useState([]);
  // const getDet = () => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((allDet) => setDet(allDet));
  // };

  // useEffect(() => {
  //   getDet();
  // },[true]);
  // var cart
  // var arrayBanner = det.filter(val => val.username=== loggedinClient.username)
  // {console.log(arrayBanner.length,"AB")}
  // if(arrayBanner.length===1){
  //   cart = arrayBanner.cartItem
  //   console.log(arrayBanner.username,"cart")
  // }

  // getClientlist();
  //   getDetails();

  // const location = useLocation();
  // var details = location.state;
  // var [cartDetail, setcartDetail] = useState("");
  // const setcartdetails = () => {
  //   if (location.state !== null) {
  //     setcartDetail(location.state.cartItem);
  //     console.log(cartDetail,"Hey i have been assigned")
  //   }
  // }
  // useEffect(() => {
  //   setcartdetails();
  //   getDet();
  // }, [true])

  // const [newCart, setNewCart] = useState([]);

  // const updateCart = () => {
  //   setcartDetail(newCart)
  // }

  // function IncrementItem(item) {
  //   var count = -1;
  //   cartDetail.map((val) => {
  //     if (val.id === item.id && val.size === item.size) {
  //       val.qty += 1;
  //       count += 1;
  //       newCart[count] = val;
  //     } else {
  //       count += 1;
  //       newCart[count] = val;
  //     }
  //   });
  //   details.cartItem = newCart;
  //   const devEnv = process.env.NODE_ENV !== "production";
  //   const { REACT_APP_DEV_URL_C, REACT_APP_PROD_URL_C } = process.env;

  //   const url = `${devEnv ? REACT_APP_DEV_URL_C : REACT_APP_PROD_URL_C}/${
  //     details.id
  //   }`;
  //   axios
  //     .put(url, details)
  //     .then((response) => setTimeout(updateCart(), 500));
  // }

  // function DecreaseItem(item) {
  //   var count = -1;
  //   cartDetail.map((val) => {
  //     if (val.id === item.id && val.size === item.size) {
  //       val.qty -= 1;
  //       count += 1;
  //       if (val.qty !== 0) {
  //         newCart[count] = val;
  //       }
  //     } else {
  //       count += 1;
  //       newCart[count] = val;
  //     }
  //   });
  //   details.cartItem = newCart;
  //   const devEnv = process.env.NODE_ENV !== "production";
  //   const { REACT_APP_DEV_URL_C, REACT_APP_PROD_URL_C } = process.env;
  //   const url = `${devEnv ? REACT_APP_DEV_URL_C : REACT_APP_PROD_URL_C}/${
  //     details.id
  //   }`;
  //   axios.put(url, details).then((response) => setcartDetail(newCart));
  // }

  return (
    <div>
      <Navbar1 />
      <div className="cart-container">
        <div className="cart-top">
          <Link to="/">
            <button className="cart-topbutton">CONTINUE SHOPPING</button>
          </Link>
          <button
            className="cart-topbutton1"
            onClick={() => {
              alert("Checkout feature is not added");
            }}
          >
            CHECKOUT NOW
          </button>
        </div>
        {cartDetail === "" ? (
          <div>No items in cart</div>
        ) : (
          <div className="cart-bottom">
            <div className="cart-bottominfo">
              {cartDetail.map((item) => {
                return (
                  <>
                  <div className="cart-product">
                    <div className="cart-productdetail">
                      <img
                        src={require("../Images/" +
                          item.brand +
                          "/" +
                          item.image)}
                        alt="loading..."
                        className="cart-productimg"
                      />
                      <div className="cart-details">
                        <span className="cart-productname">
                          <b>Product:</b> {item.name}
                        </span>
                        <span className="cart-productsize">
                          <b>Size:</b> {item.size}
                        </span>
                      </div>
                    </div>
                    <div className="cart-price">
                      <div className="cart-productamountcontainer">
                        {/* <button
                          onClick={() => {
                            IncrementItem(item);
                          }}
                        >
                          <Add />
                        </button> */}
                        <div className="cart-productamount">{item.qty}</div>
                        {/* <button
                          onClick={() => {
                            DecreaseItem(item);
                          }}
                        >
                          <Remove />
                        </button> */}
                      </div>
                      <div className="cart-productprice">{item.price}</div>
                    </div>  
                  </div>
                  <hr className="cart-horizontaline"/>
                  </>
                  
                );
              })}
            </div>
            <div className="cart-bottomsummary">
              <div className="cart-summarytitle">ORDER SUMMARY</div>
              <div className="cart-summaryitem">
                <span className="cart-summaryitemtext">Subtotal</span>
                <span className="cart-summaryitemprice">{cost}</span>
              </div>
              <div className="cart-summaryitem">
                <span className="cart-summaryitemtext">Estimated Shipping</span>
                <span className="cart-summaryitemprice">Rs 50</span>
              </div>
              <div className="cart-summaryitem">
                <span className="cart-summaryitemtext">Shipping discount</span>
                <span className="cart-summaryitemprice">Rs -50</span>
              </div>
              <div className="cart-summaryitem1">
                <span className="cart-summaryitemtext">Total</span>
                <span className="cart-summaryitemprice">{cost}</span>
              </div>
              <button className="cart-button">CHECKOUT NOW</button>
            </div>
          </div>
        )}

        <Getupdates />
        <Footer />
      </div>
    </div>
  );
};
