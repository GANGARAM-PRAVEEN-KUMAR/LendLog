import React, { useState } from 'react';
import "./styles/StaticForm.css";

export default function Document() {
  const [date, setDate] = useState("2024-10-04");
  const [borrower, setBorrower] = useState("John Doe");
  const [amount, setAmount] = useState("$10,000");
  const [lendType, setLendType] = useState("Personal Loan");
  const [dueDate, setDueDate] = useState("2025-10-04");
  const [repaymentPeriod, setRepaymentPeriod] = useState("12 months");
  const [startDate, setStartDate] = useState("2024-11-01");
  const [endDate, setEndDate] = useState("2025-10-01");
  const [interest, setInterest] = useState("5%");
  const [monthlyPayment, setMonthlyPayment] = useState("$850");
  const [paymentDueDate, setPaymentDueDate] = useState("1st");
  const [lateFee, setLateFee] = useState("$50");
  const [Lender, setLender] = useState("Rakesh");

  return (
    <div className='document'>
    <div className='FullForm'>
      <div className="agreement">
        <h1>Personal Loan Agreement Form</h1>
        <p>On {date}, I  {borrower}, will lend
        a sum of {amount} in the form of {lendType}.
        which is to be repaid in full by {dueDate}.
        Payments will be made over a period of {repaymentPeriod},
        starting on {startDate} and ending on {endDate}.
        The interest rate is {interest}, resulting in each monthly payment of {monthlyPayment}.
        Each monthly payment must be made before or on the {paymentDueDate} of every month.
        Any late payment will result in a late fee of {lateFee}.</p>
      </div>

      <div className="sign">
        <div className="item">
          <h5>(Borrower) :{borrower}</h5>
          <h5>Date :{date}</h5>
        </div>
        <div className="item">
          <h5>(Lender) :{Lender}</h5>
          <h5>Date :{date}</h5>
        </div>
        <div className="item">
          <h5>Borrower Signature:</h5><label><input type="image" alt="Borrower Signature" /></label>
          
        </div>
      </div>
    </div>
    </div>
  );
}
