import React from 'react';
import "./styles/trandetails.css";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


function TransacDetails({ onClose }) {
  const navigate = useNavigate(); 
  // Handler to close the modal when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleDocumentClick=()=>{
     navigate('/dashboard/lend/Document')
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="modal-overlay"
      onClick={handleOverlayClick}  // Trigger close on overlay click
    >
      <div className="modal-container">
        <div className="modal-content">
          <button className="wrong-btn" onClick={onClose}>X</button> {/* Wrong button */}
          <h2>Transaction Details</h2>
          <p>Name: Rakesh</p>
          <p>Date: 03-02-2025</p>
          <p>Email: rakesh@gmail.com</p>
          <p>Hello Lender Your seeing transaction</p>
          <p>You also have Notification option for borrower to inform regarding date</p>
          <button className="close-btn" onClick={handleDocumentClick} >Document</button>
        </div>
      </div>
    </motion.div>
  );
}

export default TransacDetails;
