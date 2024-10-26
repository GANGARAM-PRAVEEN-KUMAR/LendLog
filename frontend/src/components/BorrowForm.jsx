import React from 'react'
import './styles/borrow.css'

export default function BorrowForm() {
  return (
    <div className='BorrowerForm'>
       <div className='FrndBorrowForm'>
            <h1>Borrower Details</h1>
            <div className="Bform">
                  <div className='item'>
                    <p className='d'>Full Name:</p>
                     <label className='lt'><input type="text" placeholder='Enter Name with Surname'/></label>
                  </div>
                  <div className='item'>
                    <p className='ld'>Father Name</p>
                     <label className='lt'><input type="text" placeholder='Enter Your Father Name'/></label>
                  </div>
                  <div className='item'>
                    <p className='ld'> Email :</p>
                     <label className='lt' ><input type="email" placeholder='Enter verified email'/></label>
                  </div>
                  <div className='item'>
                    <p className='ld'>Mobile No</p>
                     <label className='lt'><input type="text" placeholder='Enter Mobile No'/></label>
                  </div>
                 
                  <div className='item'>
                    <p className='ld'>Aadhar No</p>
                     <label className='lt'><input type="text" placeholder='Enter Your Aadhar No'/></label>
                  </div>
                  
                  <div className='butn'>
                    {/* <div className='bnt1'>
                    <button>Verify</button></div> */}
                    <div className='bnt2'>
                    <button>next &rarr</button>
                    </div>
             
                  </div>
            </div>
            </div>
    </div>
  )
}
