import React from 'react'
import logo3 from './images/logo3.jpg'
import './styles/home2.css'
import { useState } from 'react'
export default function Header2() {
    const [text, setText] = useState("Profile")
   let headtext=()=>{
        if(text==="Profile"){
            setText("UserName");
        }
        else{
            setText("Profile");
        }
    }

  return (
    <>
    <div className="LendHome2">
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid ">
     <div className="flex1">
         <div className="imgbg">
            <img src={logo3} alt="" />
         </div>
         <div className="lend">
            <h1>LenLog</h1>
         </div>
     </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active text-dark" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Status</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">History</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Notifications</a>
        </li>
        </ul>
        <ul className="navbar-nav mx-5">

        
        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle text-dark " onClick={headtext} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {text}
          </a>

          <div className="container">
          <ul className="dropdown-menu">
            <li><a className="dropdown-item " href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
           
            <li><a className="dropdown-item" href="#">Logout</a></li>
          </ul>
          </div>
          
        </li>
        
      </ul>
      </div>
    </div>
  
</nav>
</div>
    </>
  )
}
