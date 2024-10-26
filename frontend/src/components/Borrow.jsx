import React from "react";
import pending from "./images/pending.jpg"
import completed from "./images/completed.jpg"
import Header2 from "./Header2";
import "./styles/lend.css";
function Borrow() {
  return (
    <>
      <Header2/>
      <div className = "lend">
      <div className="box">
        <h1 className="lending">{"->"}Borrower</h1>
      </div>

      <div className="header2">
        <div className="status">
          <div className="pending">
            <a href="*">
              <img src={pending} alt="" />{" "}
            </a>
            <h2>Pending</h2>
          </div>
          <div className="completed">
            <a href="*">
              <img src={completed} alt="" />
            </a>
            <h2>Completed</h2>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Borrow;
