import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import "./App.css"

import {Homepage} from "./MyComponents/Homepage"
import { Cart } from './MyComponents/Cart'
import { Loginpage } from './MyComponents/Loginpage'
import { Product } from './MyComponents/Product'
import { Register } from './MyComponents/Register'
import { Productlist } from './MyComponents/Productlist'


export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<Loginpage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/productlist" element={<Productlist />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}></Route>

        </Routes>
      </Router>
    </div>
  )
}
