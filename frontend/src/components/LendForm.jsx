import React, { useState } from 'react'; // Don't forget to import useState
import './styles/lend.css';
import { useNavigate } from 'react-router-dom';

export default function LendForm({closeModal}) {
  //const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate()
  const handleClose = () => {
    closeModal()
  };

  const handleSubmit = ()=>{
    //submit data to server
    handleClose()
    navigate("document/")

  }

  return (
    <>
      {(
        <div className="LendForm">
          <div className="overlay"> 
            <div className='ourLendForm'>
              <button className="close-button" onClick={()=>handleClose()}>&times;</button>
              <h1>Lender Details</h1>
              <div className="lform">
                <div className='item'>
                  <p className='ld'>Amount:</p>
                  <label className='lt'><input type="text" placeholder='Enter amount' /></label>
                </div>
                <div className='item'>
                  <p className='ld'>Interest:</p>
                  <label className='lt'><input type="text" placeholder='Enter Interest' /></label>
                </div>
                <div className='item'>
                  <p className='ld'>Period:</p>
                  <label className='lt'><input type="text" placeholder='Enter time in months' /></label>
                </div>
                <div className='item'>
                  <p className='ld'>Date of Registration:</p>
                  <label className='lt'><input type="date" /></label>
                </div>
                <div className='butn'>
                  <button onClick={()=>handleSubmit()}>submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
