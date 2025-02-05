import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./images/logo3.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/login.css";
import Header1 from "./Header1";
import Footer from "./Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/user/login", {
        email,
        password,
      });

      if (response.data.status === "success") {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        toast.success("Login successful!", {
          autoClose: 1000,
          onClose: () => {
            navigate("/dashboard");
          },
        });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error); // Log error for debugging
      toast.error("Invalid Credentials");
    }
  };

  return (
    
    <>
    <Header1/>
    <div className="notspace">
   .
    </div>
      <div className="ultralogin">
        <div className="prologin">
          <div className="masslogin">
            <div className="box">
              <div className="container">
                <div className="name1">
                  <img src={logo} id="logo" alt="LendLog Logo" />
                </div>
                <div className="name2">
                  <h3>LendLog</h3>
                </div>
              </div>
              <form className="box2" onSubmit={handleLogin}>
                <h1 className="friends">Welcome Back!</h1>
                <p className="item">
                  Email
                  <input
                    type="email"
                    className="input"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </p>
                <p className="item">
                  Password
                  <input
                    type="password"
                    className="input"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </p>
                <p className="butt">
                  <button type="submit">Log In</button>
                </p>
                <p className="friends">
                  Don't have an account? <a href="/register">Sign up now</a>
                </p>
              </form>
            </div>

            <div className="fullbox">
              <div className="smallbox">
                <h1 className="welcome">Welcome Back!</h1>
                <img className="cls" src={logo} alt="LendLog" />
                <h1 className="heading">LendLog</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
      <Footer/>
    </>
  );
}

export default Login;
