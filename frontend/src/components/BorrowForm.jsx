import React,{useState} from 'react'
import './styles/borrow.css'
import logo from "./images/logo3.jpg";
import { useNavigate } from 'react-router-dom';

export default function BorrowForm({closeModal,lendOpenModal}) {
  const navigate=useNavigate()
  //const [showModal, setShowModal] = useState(true);
  const handleClose = () => {
    closeModal();
    //navigate(-1)

  };

  const handleLenderForm = ()=>{
    handleClose()
    lendOpenModal()
  }

  return (
    <>
    { (
    <div className='BorrowerForm'>
      <div className="overlay">
        <div className='FrndBorrowForm'>
          <button className="close-button" onClick={handleClose}>✕</button>
          <h1>Borrower Details</h1>
          <div className="Bform">
            <div className='item'>
              <p className='d'>Full Name:</p>
              <label className='lt'><input type="text" placeholder='Enter Name with Surname' /></label>
            </div>
            <div className='item'>
              <p className='ld'>Father Name</p>
              <label className='lt'><input type="text" placeholder='Enter Your Father Name' /></label>
            </div>
            <div className='item'>
              <p className='ld'> Email :</p>
              <label className='lt'><input type="email" placeholder='Enter verified email' /></label>
            </div>
            <div className='item'>
              <p className='ld'>Mobile No</p>
              <label className='lt'><input type="text" placeholder='Enter Mobile No' /></label>
            </div>
            <div className='item'>
              <p className='ld'>Aadhar No</p>
              <label className='lt'><input type="text" placeholder='Enter Your Aadhar No' /></label>
            </div>
            <div className='item ' >
              <p className='ld'>Borrower Signature</p>
            
            </div>
            <p className='lt' style={{paddingLeft :'10rem'}}><input type="file" name="myImage" accept="image/png, image/gif, image/jpeg"/></p>
            <div className='butn'>
              <div className='bnt2'>
                <button onClick={()=>handleLenderForm()}>Next &rarr;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     )}
    </>
  );
}
