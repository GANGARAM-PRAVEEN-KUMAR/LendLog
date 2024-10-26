import React from "react";
import logo from "./images/logo.jpg";
import Header2 from "./Header2";
import "./styles/form.css"
function Form() {

  const handlePrint = (e) => {
    window.print()
}

  return (
    <>
      <Header2 />
      <div className="form1">
        <div className="img1">
          <img src={logo} className="img" alt="" />

          <h1 className="header1">LendLog Form</h1>
        </div>
        <div className="flexform">
          <div className="massform">
            <div className="container">
              <h1 className="borrower">Borrower Details</h1>

              <div className="print">
                <button className="button2" onClick={handlePrint}>Print</button>
              </div>
            </div>
            <div className="container1">
              <div className="box1">
                <p>Full Name</p>
                <p>Email</p>
                <p>Mobile No</p>
                <p>Father Name</p>
                <p>Aadhar No</p>
              </div>

              <div className="box2">
                <p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter FUll Name"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your email"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter mobile no"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Father Name"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Aadhar No"
                  />
                </p>
              </div>
            </div>
            <h1>Lending Details</h1>
            <div className="container1">
              <div className="box2">
                <p>Amount</p>
                <p>Intrest</p>
                <p>Period</p>
                <p>Date of Registration</p>
                <p></p>
              </div>
              <div className="box4">
                <p>
                  <input type="text" name="" id="" placeholder="Enter Amount" />
                </p>
                <p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Intrest"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter period(No)"
                  />
                </p>
                <p>
                  <input type="date" name="" id="" placeholder="Enter date" />
                </p>
              </div>
            </div>

            <label>
              <input type="checkbox" name="" id="" />I agree to the{" "}
              <a href="">terms and conditions</a>
            </label>
            <div className="btn">
              <button className="button1">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
