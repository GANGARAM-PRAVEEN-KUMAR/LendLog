import React, { useState } from 'react';
import "./styles/notification.css";
import Navigation from './Navigation';
import Footer from './Footer';
import Header2 from './Header2';

export default function Notification() {
  // Sample data for notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      name: "John Doe",
      date: "October 26, 2024",
      content: "Stay informed: Regular check-ups are essential for early detection!",
      seen: false,
    }
   
    // Add more notifications here if needed
  ]);

  const toggleSeen = (id) => {
    setNotifications(notifications.map((notification) =>
      notification.id === id
        ? { ...notification, seen: !notification.seen }
        : notification
    ));
  };

  return (
    <>
      <Header2 />
      <div className='notspace'>
        {/* Placeholder for spacing */}
      </div>

      <div className='Notification'>
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-card">
            <div className="notification-header">
              <p className="person-name">{notification.name}</p>
              <p className="notification-date">{notification.date}</p>
            </div>
            <div className="notification-content">
              <p>{notification.content}</p>
            </div>
            <div className="notification-status">
              {notification.seen ? (
                <span className="status-seen">✔ Seen</span>
              ) : (
                <span className="status-not-seen">✘ Not Seen</span>
              )}
            </div>
            <button
              className="toggle-seen-button"
              onClick={() => toggleSeen(notification.id)}
            >
              Mark as {notification.seen ? "Unseen" : "Seen"}
            </button>
          </div>
        ))}
      </div>
      <div className='Notification'>
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-card">
            <div className="notification-header">
              <p className="person-name">{notification.name}</p>
              <p className="notification-date">{notification.date}</p>
            </div>
            <div className="notification-content">
              <p>{notification.content}</p>
            </div>
            <div className="notification-status">
              {notification.seen ? (
                <span className="status-seen">✔ Seen</span>
              ) : (
                <span className="status-not-seen">✘ Not Seen</span>
              )}
            </div>
            <button
              className="toggle-seen-button"
              onClick={() => toggleSeen(notification.id)}
            >
              Mark as {notification.seen ? "Unseen" : "Seen"}
            </button>
          </div>
        ))}
      </div>
      <div className='Notification'>
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-card">
            <div className="notification-header">
              <p className="person-name">{notification.name}</p>
              <p className="notification-date">{notification.date}</p>
            </div>
            <div className="notification-content">
              <p>{notification.content}</p>
            </div>
            <div className="notification-status">
              {notification.seen ? (
                <span className="status-seen">✔ Seen</span>
              ) : (
                <span className="status-not-seen">✘ Not Seen</span>
              )}
            </div>
            <button
              className="toggle-seen-button"
              onClick={() => toggleSeen(notification.id)}
            >
              Mark as {notification.seen ? "Unseen" : "Seen"}
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
