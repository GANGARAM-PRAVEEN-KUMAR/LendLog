import React from 'react';
import './styles/StaticForm.css';
import logo from './images/logo3.jpg';
import Navigation from './Navigation';

export default function Document() {

  const handlePrint = () => {
    window.print();
  };
const renderCoins = () => {
    const coins = [];
    for (let i = 0; i < 50; i++) {
      coins.push(<div className="coin" key={i}></div>);
    }
    return coins;
  };


  return (
    <>
  
    <Navigation/>
    
    <div className='notspace'>
     .
     </div>
    <div className="document">
    {renderCoins()}
      <div className="FullForm" id="document-content">
        <div className="agreement">
          <div className="dochead">
            <p className="myHead">LendLog</p>
            <img src={logo} alt="logo" />
          </div>
          <h2>Personal Loan Contract</h2>
          <p>
            This is an agreement between John Doe, henceforth known as "Borrower", and Rakesh, henceforth known as "Lender".
          </p>
          <p>Borrower wishes to borrow $10,000, known as "Loan", from Lender. The Loan will be furnished to Borrower on 2024-10-04.</p>
          <h3>Conditions for this Loan are as follows:</h3>
          <ol>
            <li>Borrower will begin repayment of Loan on 2024-11-01.</li>
            <li>The final date for repayment will be 2025-10-01.</li>
            <li>Failure to repay the Loan within the due period will result in a fine of $50 or legal action.</li>
          </ol>
          <p>
            Borrower and Lender agree to the conditions above and sign to that effect in the presence of a notary public on 2024-10-04.
          </p>
        </div>

        <div className="sign">
          <div className="item">
            <h5>Borrower Details:</h5>
            <p>Name: John Doe</p>
            <p>Father Name: Venkatesh</p>
            <p>Mobile No: 7780571080</p>
            <p>Aadhar Card: 789456124569</p>
          </div>
        </div>
        <div className="borrowimg">
          <div className="item1">
            <h5>Borrower Signature:</h5>
            <label><input type="image" alt="Borrower Signature" /></label>
          </div>
        </div>
      </div>

      {/* Buttons for Print and Download */}
      <div className="actions">
        <button onClick={handlePrint}>Print Document</button>
   
      </div>
    </div>
    </>
  );
}
