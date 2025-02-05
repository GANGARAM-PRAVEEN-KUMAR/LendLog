import React from "react";
import logo3 from "./images/logo3.jpg";
import "./styles/Nav.css";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
export default function Navigation() {
  const [text, setText] = useState("Profile");
  let headtext = () => {
    if (text === "Profile") {
      setText("UserName");
    } else {
      setText("Profile");
    }
  };

  return (
    <>
      <div className="Nav">
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container-fluid ">
            <Link className="log" to="/dashboard">
            <div className="flex1">
                <div className="imgbg">
                  <img src={logo3} alt="" />
                </div>
                <div className="lend">
                  <h1>LendLog</h1>
                </div>
            </div>
              </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-dark"
                    aria-current="page"
                    to="/dashboard"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-dark" to="/transaction">
                    Transactions
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link text-dark" to="/notify">
                    Notifications
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav mx-5">
                <li className="nav-item dropdown  ">
                  <NavLink
                    className="nav-link dropdown-toggle text-dark "
                    onClick={headtext}
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {text}
                  </NavLink>

                  <div className="container">
                    <ul className="dropdown-menu ">
                      <li>
                        <Link className="dropdown-item" to="/Profile">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Settings
                        </Link>
                      </li>

                      <li>
                        <Link className="dropdown-item " to="#">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
