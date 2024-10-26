import React, { useState } from "react";
import axios from "axios";
import logo from "./images/logo.jpg";
import "./styles/register.css";
import Header1 from "./Header1";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("");
  const count=0
  

  const navigate = useNavigate();
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const user = { email, username, password, name, mobileNumber, gender ,count};
      console.log(user)
      const response = await axios.post("http://localhost:4000/user/signup", user);

      if (response.data.status === "success") {
        toast.success("Registration Successful", {
          autoClose: 2000,
          onClose: () => {
            navigate("/login");
          },
        });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error)
      toast.error("Internal Error");
    }
  };

  return (
    <>
      <Header1 />
      <div className="register">
        <div className="massregister">
          <div className="design">
            <h1>Hello Friend!</h1>
            <h3>Welcome back to LendLog website</h3>
            <div className="img1">
              <img className="cls" src={logo} alt="LendLog Logo" />
              <h1 className="heading">LendLog</h1>
            </div>
          </div>
          <div className="box">
            <h1>Create your account</h1>
            <div className="con1">
              <div className="con2">
                <p>Full Name </p>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Name"
                />
                <p>Email </p>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                />
                <p>Password </p>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                />
              </div>
              <div className="con3">
                <p>Username </p>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter Username"
                />
                <p>Mobile Number </p>
                <input
                  type="text"
                  id="phone"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="Enter Mobile Number"
                />
                <p>Confirm Password </p>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="con4">
              <p className="gender">Gender</p>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="m"
                  checked={gender === "m"}
                  onChange={() => setGender("m")}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="f"
                  checked={gender === "f"}
                  onChange={() => setGender("f")}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="n"
                  checked={gender === "n"}
                  onChange={() => setGender("n")}
                />
                Prefer not to say
              </label>
              <p>
                <input type="checkbox" /> By Signing Up I Agree with{" "}
                <NavLink to="/terms" className="Terms">
                  Terms & Conditions
                </NavLink>
              </p>
            </div>
            <div className="btn">
              <button className="btn1" onClick={handleRegister}>
                Sign Up
              </button>
            </div>
            <p className="signin">
              Already have an account?{" "}
              <NavLink to="/login" className="Terms">
                Sign In
              </NavLink>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Register;
