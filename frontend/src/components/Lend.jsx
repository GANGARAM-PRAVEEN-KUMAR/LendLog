import React, { useState } from 'react'
import Navigation from './Navigation'
import { useNavigate } from 'react-router-dom'
import BorrowForm from './BorrowForm';
import LendForm from './LendForm';
import Footer from './Footer';



export default function Lend() {
    const navigate = useNavigate()
    const [showModal1, setShowModal1] = useState(false)
    const [showModal2, setShowModal2] = useState(false)

  const handleShowModal1 = () => {
    setShowModal1(true); // Show the modal
  };

  const handleCloseModal1 = () => {
    setShowModal1(false); // Hide the modal
  };
  const handleShowModal2 = () => {
    setShowModal2(true); // Show the modal
  };

  const handleCloseModal2 = () => {
    setShowModal2(false); // Hide the modal
  };
  return (
    <>
        <Navigation/>
         <div className="Dashboard">
           <div className="massdashboard">
             <div className="Container1">
               <div className="box1">
                 <div className="top">
                   <h1>Document Generation</h1>
                 </div>
                 <div className="bottom" >
                   <button onClick={()=>handleShowModal1()}>New Document</button>
                 </div>
               </div>
               <div className="box1">
                 <div className="top">
                   <h1> Every Day Instalment</h1>
                 </div>
                 <div className="bottom">
                   <button> EDI</button>
                 </div>
               </div>
             </div>
             <div className="container2"> </div>
           </div>
         </div>
         {showModal1 && <BorrowForm closeModal={handleCloseModal1} lendOpenModal={handleShowModal2} />}
         {showModal2 && <LendForm closeModal={handleCloseModal2} />}

        <Footer/>
    </>
   
  )
}
