import React, { useState } from 'react';
import './styles/sical.css'; 

export default function SICal() {
  const [principle, setPrinciple] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState(null);
  const [amt, setAmt] = useState(null);

  const handleSIcal = () => {
    const p = parseFloat(principle);
    const r = parseFloat(rate);
    const t = parseFloat(time) / 12; 
    if (!isNaN(p) && !isNaN(r) && !isNaN(t) && p > 0 && r > 0 && t > 0) {
      const si = (p * r * t) / 100;
      const ta=si+p ;

      setResult(si.toFixed(2));
      setAmt(ta.toFixed(2))
    } else {
      setResult('Invalid input! Please enter positive numbers.');
    }
  };

  return (
    <div className="simplecal">
      <div className="SIcontainer">
        <h2>Simple Interest Calculator</h2>
        <div className="input-group">
          <p>Enter the Principle Amount:</p>
          <input
            type="text"
            value={principle}
            onChange={(e) => setPrinciple(e.target.value)}
            placeholder="Enter principle amount"
          />
        </div>
        <div className="input-group">
          <p>Enter Interest Rate (annual %):</p>
          <input
            type="text"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter interest rate"
          />
        </div>
        <div className="input-group">
          <p>Enter the Time in Months:</p>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Enter time in months"
          />
        </div>
        <button className="submit-button" onClick={handleSIcal}>
          Submit
        </button>
        {result !== null && (
          <p className="result">
            Intrest amount: {result}
          </p>
          
          
        
        )}
        {result !== null && (
          <p className="result">
            Total amount: {amt}
          </p>
          
          
        
        )}

      </div>
    </div>
  );
}
