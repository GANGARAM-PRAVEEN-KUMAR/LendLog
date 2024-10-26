import React from 'react';
import './styles/transcation.css';

export default function TransactionCard({ borrowerName, date }) {
  return (
    <div className="transaction-card">
      <div className="card-header">
        <h2>Transaction</h2>
      </div>
      <div className="card-content">
        <div className="transaction-info">
          <p><strong>Borrower:</strong> {borrowerName}</p>
          <p><strong>Date:</strong> {new Date(date).toLocaleDateString()}</p>
        </div>
        <button className="view-button">View Document</button>
      </div>
    </div>
  );
}
