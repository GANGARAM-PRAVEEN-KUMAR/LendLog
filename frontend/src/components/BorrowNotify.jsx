import React, { useState } from 'react';
import "./styles/notification.css";
import Navigation from './Navigation';
import Footer from './Footer';

export default function BorrowNotify() {
  const [name, setName] = useState("Invalid");
    const [date, setDate] = useState("00-00-0000");
    const [content, setContent] = useState("Say no cancer");
  
    const updateNotification = () => {
      setName("John Doe");
      setDate("October 26, 2024");
      setContent("Stay informed: Regular check-ups are essential for early detection!");
    };
  
    return (
      <>
      <Navigation/>
     <div className='notspace'>
     h
     </div>
     
      <div className='Notification'>
        <div className="notification-card">
          <div className="notification-header">
            <p className="person-name"> {name}</p>
            <p className="notification-date"> {date}</p>
          </div>
          <div className="notification-content">
            <p>{content}</p>
          </div>
          <div className="notification-footer">
            <button className="view-button" onClick={updateNotification}>View</button>
          </div>
        </div>
      </div>
      <div className='Notification'>
        <div className="notification-card">
          <div className="notification-header">
            <p className="person-name"> {name}</p>
            <p className="notification-date"> {date}</p>
          </div>
          <div className="notification-content">
            <p>{content}</p>
          </div>
          <div className="notification-footer">
            <button className="view-button" onClick={updateNotification}>View</button>
          </div>
        </div>
      </div>
     
     
     
      <Footer/>
      </>
    )
}
