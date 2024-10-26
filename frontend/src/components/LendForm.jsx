import React from 'react'
import "./styles/lend.css"
export default function LendForm() {
  return (
       <div className="LendFrom">
        <div className='ourLendForm'>
            <h1>Lender Details</h1>
            <div className="lform">
                  <div className='item'>
                    <p className='ld'>Amount:</p>
                     <label className='lt'><input type="text" placeholder='Enter amount'/></label>
                  </div>
                  <div className='item'>
                    <p className='ld'> Interest:</p>
                     <label className='lt' ><input type="text" placeholder='Enter Intrest '/></label>
                  </div>
                  <div className='item'>
                    <p className='ld'>Period:</p>
                     <label className='lt'><input type="text" placeholder='Enter time in month'/></label>
                  </div>
                  <div className='item'>
                    <p className='ld'>Date of Registration: </p>
                     <label className='lt'><input type="date"/></label>
                  </div>
                  
                  <div className='butn'>
                    <button>submit</button>
             
                  </div>
            </div>
            </div>
       </div>
  )
}
