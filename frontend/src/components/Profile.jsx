import React from 'react';
import plogo from './images/plogo.jpg';
import './styles/profile.css';
import Header2 from './Header2';

function Profile() {
 
  return (
    <>
    <Header2/>
    
    <div className="profile-container">
      <div className="BigProfile">
        <div className="smallprofile">
          <div className="edit-container">
            <button className="edit">Edit</button>
          </div>
          <div className="profile-photo">
            <img src={plogo} alt="Profile" className="profile-img" />
          </div>
          <div className="details">
            <div className="hdetails">
              <h2>Full Name :</h2>
              <h2>Date of Birth :</h2>
              <h2>Email :</h2>
              <h2>Mobile No :</h2>
              
            </div>
            <div className="pdetails">
              <h2>Rakesh</h2>
              <h2>03\09\2003</h2>
              <h2>Rakesh@gmail.com</h2>
              <h2>7780571080</h2>
              
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
}

export default Profile;
