import React, { useState } from 'react';
import Lend from './images/lendrequest.webp';
import './styles/request.css';

export default function RequestPage() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="RequestPage">
          <div className="blur-background" onClick={closeModal}></div>
          <div className="MegaPage">
            <button className="close-button" onClick={closeModal}>&times;</button>
            <h1>Welcome Lender</h1>
            <img src={Lend} alt="Lend request" />
            <div className="bigbutton">
              <div className="request">
                <button>Request Borrower</button>
              </div>
              <div className="proceed">
                <button>Proceed Action</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
