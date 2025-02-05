import React from 'react'
import "./styles/transcation.css"
import trans from "./images/trans.jpg";
import { useState } from 'react'
import Header2 from './Header2';
import Footer from './Footer';
import Navigation from './Navigation';
import TransacDetails from './Transacdetails';
export default function TransactionCard() {
  const [date, setdate] = useState("12-12-2024");
  const [amt, setamt] = useState("2000000");
  const [showDetails, setShowDetails] = useState(false);
  const handleDetailsClick = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };
  return (
    <>
     <Navigation/>

      <div className="page-border left"></div>
      <div className="page-border right"></div>
      <div className="main-container">
      <div className='tblock1'> 
      <img src={trans} alt="" />
    </div>
      <div className='filterbtn'>
      <button>Previous</button>
      <button>onGoing</button>
      <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-primary " type="submit">Search</button>
    </form>
  </div>
</nav>
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
          <button onClick={handleDetailsClick}>Details</button>
     </div>
     
    </div>
    </div>
    {showDetails && <TransacDetails onClose={handleCloseDetails} />}
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
          <button onClick={handleDetailsClick}>Details</button>
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
          <button onClick={handleDetailsClick}>Details</button>
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

