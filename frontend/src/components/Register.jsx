import React, { useState } from "react";
import axios from "axios";
import logo from "./images/logo3.jpg";
import "./styles/register.css";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent form submission

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Basic validation for mobile number format
    const mobileRegex = /^[0-9]{10}$/; // Adjust regex according to your requirements
    if (!mobileRegex.test(mobileNumber)) {
      toast.error("Please enter a valid mobile number");
      return;
    }

    try {
      const user = { email, username, password, name, mobileNumber, gender };
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
      console.error(error);
      toast.error("Internal Error");
    }
  };

  return (
    <>
      <div className="ultraregister">
        <div className="proregister">
          <div className="massregister">
            <div className="design">
              <div className="item1">
                <h1>Hello Friend!</h1>
                <h3>Welcome back to the LendLog website</h3>
                <div className="img1">
                  <img className="cls" src={logo} alt="LendLog" />
                  <h1 className="heading">LendLog</h1>
                </div>
              </div>
            </div>
            <form className="box" onSubmit={handleRegister}>
              <h1>Create your account</h1>
              <h2 className="error"></h2>
              <div className="con1">
                <div className="con2">
                  <p>Full Name</p>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <p>Email</p>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <p>Password</p>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="con3">
                  <p>User Name</p>
                  <input
                    type="text"
                    id="username"
                    placeholder="User Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <p>Mobile No</p>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Mobile No"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                  />
                  <p>Confirm Password</p>
                  <input
                    type="password"
                    id="Cpassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
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
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="f"
                    checked={gender === "f"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="o"
                    checked={gender === "o"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Prefer not to say
                </label>
                <p>
                  <input type="checkbox" required /> By Signing Up, I Agree with{" "}
                  <a href="*" className="Terms">
                    Terms & Conditions
                  </a>
                </p>
              </div>
              <div className="btn">
                <p>
                  <button type="submit" className="btn1">Sign Up</button>
                </p>
              </div>
              <p className="signin">
                Already have an account?{" "}
                <a href="/login" className="Terms">Sign In</a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Register;
