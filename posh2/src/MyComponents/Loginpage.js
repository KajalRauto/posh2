import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Close } from "@material-ui/icons";

export const Loginpage = (props) => {
  const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL_C, REACT_APP_PROD_URL_C } = process.env;
  
    const url = `${devEnv ? REACT_APP_DEV_URL_C: REACT_APP_PROD_URL_C}`;
  const [clientlist, setclientlist] = useState([]);
  const getClientlist = () => {
    fetch(url)
      .then((response) => response.json())
      .then((allClient) => setclientlist(allClient));
  };

  useEffect(() => {
    getClientlist();
    
  }, [true]);
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const save = (e) => {
    e.preventDefault();
    var result = clientlist.find(
      (val) => val.username === username && val.password === password
    );
    const goback = () => {
      sessionStorage.Username = JSON.stringify(result)
      console.log(sessionStorage.Username)
      setMessage(username + " logged in successfully");
      setTimeout(() => {
        console.log("4");
        sessionStorage.status = true
        navigate("/");
      }, 3000);
    };
    if (result) {
      console.log("hi");
      goback();
    } else {
      setMessage("Username and password did not match");
    }
  };
  return (
    <div className="login-container">
      <div className="login-holder">
        <button
          className="login-button"
          onClick={() => {
            navigate("/");
          }}
        >
          <Close />
        </button>
        <div className="login-title">SIGN IN</div>
        <p>{message}</p>
        <form className="login-form">
          <input
            placeholder="username"
            className="login-input"
            onChange={(obj) => setUsername(obj.target.value)}
          ></input>
          <input
          type="password"
            placeholder="password"
            className="login-input"
            onChange={(obj) => setPassword(obj.target.value)}
          ></input>
          <button className="login-button" onClick={save}>
            LOGIN
          </button>
        </form>
        {/* <Link to="/" className='login-link'>DO NOT YOU REMEMBER THE PASSWORD ?</Link><br/>
                <Link to="/" className='login-link'>CREATE A NEW ACCOUNT</Link> */}
      </div>
    </div>
  );
};
