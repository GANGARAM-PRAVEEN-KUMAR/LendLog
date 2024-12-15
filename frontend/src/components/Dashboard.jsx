import React from "react";
import "./styles/Dashboard.css";
import Header2 from "./Header2";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
export default function Dashboard() {
  const navigate=useNavigate()
  const toLend = ()=>{
    navigate("lend/")
    
  }
  return (
    <>
      <Header2/>
      <div className="Dashboard">
        <div className="massdashboard">
          <div className="Container1">
            <div className="box1">
              <div className="top">
                <h1> Hello! Lender</h1>
              </div>
              <div className="bottom">
                <button onClick={()=>toLend()}>Lend</button>
              </div>
            </div>
            <div className="box1">
              <div className="top">
                <h1> Hey! Borrower</h1>
              </div>
              <div className="bottom">
                <button>Borrow</button>
              </div>
            </div>
          </div>
          <div className="container2"> </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
