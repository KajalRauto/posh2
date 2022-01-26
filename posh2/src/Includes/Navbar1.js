// import { ShoppingCartOutlined } from "@material-ui/icons";
// import React from "react";
// import { Container, Nav, Navbar } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

// export const Navbar1 = () => {
//   return (
//     <div>
//       {/* Code for Navbar */}
//       <Navbar expand="lg">
//         <Container className="d-flex">
//           <Navbar.Brand
//             href="#home"
//             style={{ "font-weight": "bold", color: "teal" }}
//           >
//             POSH
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav" className="navbar">
//             <Nav>
//               <NavLink to="/register" className="nav">
//                 Register
//               </NavLink>
//               <NavLink to="/signin" className="nav">
//                 Sign In
//               </NavLink>
//               <NavLink to="/cart" className="nav">
//                 <ShoppingCartOutlined />
//               </NavLink>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };
// --------------------------------------------------------------------------- 


import { ShoppingCartOutlined } from "@material-ui/icons";
import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})}
  
`;
const Wrapper = styled.div`
padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: "10px 5px"} )};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
`;

// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;

// `;

// const Input = styled.input`
//   border: none;
//   ${mobile({width: "50px"})}

// `;

const Center = styled.div`
  flex: 1;
  text-align: center;
  
`;



const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({flex:2, justifyContent: "center"})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;
  ${mobile({fontSize: "12px", marginLeft: "10px"})}`;

 

export const Navbar1 = () => {
  var [status, setStatus] = useState("undefined")
  useEffect(() => {
    // setStatus(props.status)
    console.log(sessionStorage.status)
    setStatus(sessionStorage.status)
  }, [true])

  const remove = () => {
    setStatus(undefined)
    sessionStorage.status=undefined;
    // setStatus(sessionStorage.status);
    // console.log(sessionStorage.status)
    // console.log(status)
  }
  const navigate = useNavigate();
  const navToCart = () => {
    // navigate("/", {state:"true"});
    navigate("/");

  }
  return (
    <Container>
      <Wrapper>
      <Left>
      </Left>
      <Center>
      <Link className="Logo" to="/">
      <h1>POSH</h1>
      </Link>  
      </Center>
      <Right>

        {(status==="undefined" || status===undefined)?(
           <>
           <MenuItem><Link className="Logo" to="/register">Register</Link></MenuItem>
           <MenuItem><Link className="Logo" to="/login">Login</Link></MenuItem>
           </>
        ):(
          <MenuItem><Link className="Logo" to="/" onClick={remove}>Logout</Link></MenuItem>
        )}
        {/* <MenuItem >
        <Link to="/cart"><ShoppingCartOutlined /></Link>
        </MenuItem> */}
      </Right>
      </Wrapper>
    </Container>
  );
};
