import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "./images/logo.jpg";
import "./styles/head2.css";

function Header2() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token");
   
    localStorage.removeItem("username");
    
    navigate("/");
    return;
  };


  return (
    <>
    <div className="head2">
      <div className="container">
        <div className="header">
          <div className="box1">
            <img src={logo} className="img1" alt="" />
            <h1 className="head1">LendLog</h1>
          </div>
          <ul className="order">
            <li className="item">
              <NavLink to="/dashboard" className="link">
                Home
              </NavLink>
            </li>
            <li className="item">
              <NavLink to="/lend" className="link">
                Lend
              </NavLink>
            </li>
            <li className="item">
              <NavLink to="/borrow" className="link">
                Borrow
              </NavLink>
            </li>
            <li className="item">
              <NavLink to="/contactus" className="link">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="logout">
          <button className="l1" onClick={handleLogout}>Logout</button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Header2;
