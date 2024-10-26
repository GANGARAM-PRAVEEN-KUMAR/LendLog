import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "./images/logo.jpg";
import Header1 from "./Header1";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); 
    console.log("clicked")
    try {
      const response = await axios.post("http://localhost:4000/user/login", {
        email,
        password,
      });
      console.log(response)
      if (response.data.status === "success") {
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("username",response.data.username)
        toast.success("Login successful!", {
          autoClose: 1000,
          onClose: () => {
            window.open('/dashboard', '_self');
            return ;
          },
        });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <>
      <Header1 />
      <div className="login">
        <form onSubmit={handleLogin}>
        <div className="masslogin">
          <div className="fullbox">
            <h1 className="welcome">Welcome Back!</h1>
            <p>Welcome to LendLog Website</p>
            <img className="cls" src={logo} alt="LendLog Logo" />
            <h1 className="heading">LendLog</h1>
          </div>
          <div className="box">
            <div className="container">
              <div className="name1">
                <img src={logo} id="logo" alt="Logo" />
              </div>
              <div className="name2">
                <h3>LendLog</h3>
              </div>
            </div>
            <div className="box2">
              <h1 className="friends">Welcome Back!</h1>
              <p className="item">
                Email
                <input
                  type="text"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </p>

              <p className="item">
                Password
                <input
                  type="password"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                />
              </p>

              <p className="btn">
              <button type="submit">Log In</button>
              </p>

              <p className="friends">
                Don't have an account?{" "}
                <NavLink to="/register">Sign up now</NavLink>
              </p>
            </div>
          </div>
        </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
