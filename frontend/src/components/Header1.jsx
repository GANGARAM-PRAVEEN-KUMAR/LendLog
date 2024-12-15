import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo3 from "./images/logo3.jpg"
import "./styles/head1.css"
function Header1() {
  return (
    <>
      <div className="head1">
        <div className="LendHome2">
           <nav className="navbar navbar-expand-lg bg-body-tertiary ">
         <div className="container-fluid ">
            <div className="flex1">
                <div className="imgbg">
                   <img src={logo3} alt="" />
                </div>
                <div className="lend">
                   <h1>LendLog</h1>
                </div>
            </div>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
               <li className="nav-item">
                 <NavLink className="nav-link active text-dark" aria-current="page" to="/Login">Login</NavLink>
               </li>
               <li className="nav-item">
                 <NavLink className="nav-link text-dark" to="/register">Register</NavLink>
               </li>
               <li className="nav-item">
                 <NavLink className="nav-link text-dark" to="/contact">Contact Us</NavLink>
               </li>
              
               </ul>
               
             </div>
           </div>
         
       </nav>
      </div>
      </div>
    </>
  );
}

export default Header1;
