import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Close } from "@material-ui/icons";

export const Register = () => {
  const url = "http://localhost:5000/clients";
  const [clientlist, setclientlist] = useState([]);
  const getClientlist = () => {
    fetch(url)
      .then((response) => response.json())
      .then((allClient) => setclientlist(allClient));
  };
  var count = 0;
  useEffect(() => {
    getClientlist();
    count = clientlist.length + 1;
  },[true]);
  console.log(clientlist)
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const save = (e) => {
    e.preventDefault();
    var result = clientlist.find(val => val.username===username || val.email===email)  
    console.log(result)
    const goback = () => {
      setMessage(username + " registered successfully")
      setTimeout(() => {
        sessionStorage.status = true
        navigate("/")
      }, 3000)
    }
    
    if (name.length < 4) {
      setMessage("Length of name should be atleast 4");
    } else if (username.length < 3) {
      setMessage("Length of username should be atleast 3");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setMessage("Enter valid email address(abc@po.in)");
    } else if (!/^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$/.test(password)) {
      setMessage("Enter a strong password") ;
      // 8 characters + alphanumeric 
    } else if (result) {
        setMessage("Username or email is already registered") ;
    } else {
      var clientInfo = {
        id: count,
        name: name,
        lastname: lastname,
        username: username,
        email: email,
        password: password,
        cartItem:[]
      };
      const devEnv = process.env.NODE_ENV !== "production";
      const { REACT_APP_DEV_URL_C, REACT_APP_PROD_URL_C } = process.env;
            const url = `${devEnv ? REACT_APP_DEV_URL_C: REACT_APP_PROD_URL_C}`;
      axios
        .post(url, clientInfo)
        .then((response) => goback());
    }
    
  };

  return (
    <div className="register-container">
      {/* {clientlist.map((clientinfo, index) => {
                return(<div key={index}>
                    {clientinfo.id},{clientinfo.name},{clientinfo.lastname},{clientinfo.username},{clientinfo.email},{clientinfo.password}</div>
                )
            })} */}
      <div className="register-holder">
      <button className='login-button' onClick={() => {navigate("/")}}><Close /></button>
        <h1 className="register-title">CREATE AN ACCOUNT</h1>
        <p>{message}</p>
        <form className="register form">
          <input
            placeholder="name*"
            className="register-input"
            onChange={(obj) => setName(obj.target.value)}
          ></input>
          <input
            placeholder="last name*"
            className="register-input"
            onChange={(obj) => setLastname(obj.target.value)}
          ></input>
          <input
            placeholder="username*"
            className="register-input"
            onChange={(obj) => setUsername(obj.target.value)}
          ></input>
          <input
            placeholder="email*"
            className="register-input"
            onChange={(obj) => setEmail(obj.target.value)}
          ></input>
          <input
          type="password"
            placeholder="password*"
            className="register-input"
            onChange={(obj) => setPassword(obj.target.value)}
          ></input>
          <div className="register-agreement">
            By creating an account, I cansent to the processing of my
            personaldata in accordance with the <b>PRIVACY POLICY</b>
          </div>
          <button className="register-button" onClick={save}>
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};
