import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "./images/logo.jpg"
import "./styles/head1.css"
function Header1() {
  return (
    <>
      <div className="head1">
        <div className="container">
          <div className="header">
            <div className="box1">
              <img src={logo} className="img1" alt=""/>
              <h1 className="head1">LendLog</h1>
            </div>
            <ul className="order">
              
              <li className="item">
                <NavLink to="/register" className="link">Register</NavLink>
              </li>
              <li className="item">
                <NavLink to="/login"  className="link">Login</NavLink>
              </li>
              <li className="item">
                <NavLink to="/contactus"  className="link">Contact Us</NavLink>
              </li>
            </ul>
          </div>
          {/* <div className="logout">
            <button className="l1">Logout</button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Header1;
