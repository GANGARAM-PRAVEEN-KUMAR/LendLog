import React, { useState } from 'react';
import './styles/Calender.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function App() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    // Add your logic to mark the date when the borrower gives the amount
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-left">
          <button>Edi Details</button>
          <button>Lender</button>
          <button>Borrower</button>
        </div>
        <div className="navbar-right">
          <button>Notifications</button>
          <button>Transactions</button>
          <button>Messages</button>
          <button>Lending</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="section">
        <h2>Welcome to Edi!</h2>
        <p>Here you can manage your lending and borrowing activities. Choose a section from the navigation bar to get started.</p>
      </div>

      {/* Lender Section */}
      <div className="section">
        <h2>Lender Section</h2>
        {/* Lender content goes here */}
      </div>

      {/* Borrower Section */}
      <div className="section">
        <h2>Borrower Section</h2>
        {/* Borrower content goes here */}
      </div>

      {/* Notifications Section */}
      <div className="section">
        <h2>Notifications</h2>
        {/* Notifications content goes here */}
      </div>

      {/* Transactions Section */}
      <div className="section">
        <h2>Transactions</h2>
        {/* Transactions content goes here */}
      </div>

      {/* Messages Section */}
      <div className="section">
        <h2>Messages</h2>
        {/* Messages content goes here */}
      </div>

      {/* Lending Calendar Section */}
      <div className="section">
        <h2>Lending Calendar</h2>
        <Calendar onChange={handleDateChange} value={date} />
      </div>
    </div>
  );
}

export default App;
