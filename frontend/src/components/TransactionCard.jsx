import React from 'react'
import "./styles/transcation.css"
import trans from "./images/trans.jpg";
import { useState } from 'react'
import Header2 from './Header2';
import Footer from './Footer';
export default function TransactionCard() {
  const [date, setdate] = useState("12-12-2024");
  const [amt, setamt] = useState("2000000");
  return (
    <>
     <Header2/>

      <div class="page-border left"></div>
      <div class="page-border right"></div>
      <div class="main-container">
    <div className='tblock1'> 
      <img src={trans} alt="" />
    </div>
    
    <div className="transcard">
    
      <div className='tcont'>
     <div className="trcard">
        <p>Received from:</p>
        <h1>Lender</h1>

         <div className='tcontain'>
             <div className='tdate'> Date: {date}</div>
             <div className='tamt'> Amount:{amt}</div>
         </div>

     </div>

     <div className='tnotify'>
          <p><button >Notify</button></p>
          <button>Details</button>
     </div>
     
    </div>
    </div>
    <div className="transcard">
      <div className='tcont'>
     <div className="trcard">
        <p>Received from:</p>
        <h1>Lender</h1>

         <div className='tcontain'>
             <div className='tdate'> Date: {date}</div>
             <div className='tamt'> Amount:{amt}</div>
         </div>

     </div>
     <div className='tnotify'>
          <p><button>Notify</button></p>
          <button>Details</button>
     </div>
     
    </div>
    </div>
    <div className="transcard">
      <div className='tcont'>
     <div className="trcard">
        <p>Received from:</p>
        <h1>Lender</h1>

         <div className='tcontain'>
             <div className='tdate'> Date: {date}</div>
             <div className='tamt'> Amount:{amt}</div>
         </div>

     </div>
     <div className='tnotify'>
          <p><button>Notify</button></p>
          <button>Details</button>
     </div>
     
    </div>
    </div>
    <div className="transcard">
      <div className='tcont'>
     <div className="trcard">
        <p>Received from:</p>
        <h1>Lender</h1>

         <div className='tcontain'>
             <div className='tdate'> Date: {date}</div>
             <div className='tamt'> Amount:{amt}</div>
         </div>

     </div>
     <div className='tnotify'>
          <p><button>Notify</button></p>
          <button>Details</button>
     </div>
     
    </div>
    </div>
    <div className="transcard">
      <div className='tcont'>
     <div className="trcard">
        <p>Received from:</p>
        <h1>Lender</h1>

         <div className='tcontain'>
             <div className='tdate'> Date: {date}</div>
             <div className='tamt'> Amount:{amt}</div>
         </div>

     </div>
     <div className='tnotify'>
          <p><button>Notify</button></p>
          <button>Details</button>
     </div>
     
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

