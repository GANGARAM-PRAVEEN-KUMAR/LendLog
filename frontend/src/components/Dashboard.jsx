import React from 'react'
import './styles/Dashboard.css'
export default function Dashboard() {
  return (
    <>
    <div className="Dashboard">
        <div className="massdashboard">
    <div className="Container1">
        <div className="box1">
            <div className="top">
           <h1> Hello! Lender</h1>
           </div>
           <div className="bottom">
           <button>Lend</button>
           </div>
        </div>
        <div className="box1">
            <div className="top">
           <h1> Hey! Borrower</h1>
           </div>
           <div className="bottom">
           <button>Borrow</button>
           </div>
        </div>
    </div>
    <div className="container2"> </div>
    </div>
    </div>
   </>
  
  )
}
