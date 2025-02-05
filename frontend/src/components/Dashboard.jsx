import React, { useRef ,useState} from "react";
import "./styles/Dashboard.css";
import Header2 from "./Header2";
import Footer from "./Footer";
import dash from './images/image.png'
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const [principle, setPrinciple] = useState('');
    const [rate, setRate] = useState('');
    const [time, setTime] = useState('');
    const [result, setResult] = useState(null);
    const [amt, setAmt] = useState(null);
  
    const handleSIcal = () => {
      const p = parseFloat(principle);
      const r = parseFloat(rate);
      const t = parseFloat(time) / 12; 
      if (!isNaN(p) && !isNaN(r) && !isNaN(t) && p > 0 && r > 0 && t > 0) {
        const si = (p * r * t) / 100;
        const ta=si+p ;
  
        setResult(si.toFixed(2));
        setAmt(ta.toFixed(2))
      } else {
        setResult('Invalid input! Please enter positive numbers.');
      }
    };
    const navigate=useNavigate()
    const toLend = ()=>{
      navigate("lend/")
      
    }
  const interestSectionRef = useRef(null); // Create a ref for the interest section
  const  insightsSectionRef = useRef(null); // Create a ref for the interest section

  const scrollToInterestSection = () => {
    interestSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToInsightsSection = () => {
    insightsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  

  return (
    <>
      <Header2 />
      <div className="Dashboard">
        <div className="background-overlay">
         

          <div className="massdashboard">
          
            <div className="Container1">
            <img id="dashimg"  src={dash}  />
              <div className="box1">
                <div className="top">
                  <h1>Hello! Lender</h1>
                </div>
                {/* <img src={dash} alt="" /> */}
                <div className="bottom">
                  <button onClick={toLend} >Lend</button>
                </div>
              </div>

              <div className="box1">
                <div className="top">
                  <h1>Hey! Borrower</h1>
                </div>
                <div className="bottom">
                  <button>Borrow</button>
                </div>
              </div>
            </div>
            </div>
            
            </div>
            <div className="extra-cards">
              <div className="card">
                <h2>Track Loans</h2>
                <p>Monitor your lending or borrowing history in one place.</p>
                <button>View History</button>
              </div>
              <div className="card">
                <h2>Calculate Interest</h2>
                <p>Use our calculator to compute interest easily.</p>
                <button onClick={scrollToInterestSection}>Go to Interest</button>
              </div>
              <div className="card">
                <h2>Get Insights</h2>
                <p>Analyze lending and borrowing trends with our tools.</p>
                <button onClick={scrollToInsightsSection} >View Insights</button>
              </div>
            </div>
         
       
        <div ref={ insightsSectionRef} className="insights-section">
              <h2>Market Insights</h2>
              <p>
                Stay ahead of the curve with our comprehensive market insights.
                Explore trends, lending opportunities, and borrowing habits in
                real-time.
              </p>
              <div className="insight-cards">
                <div className="insight-card">
                  <h3>Interest Rate Trends</h3>
                  <p>Discover how interest rates are evolving across different markets.</p>
                  <button>View Details</button>
                </div>
                <div className="insight-card">
                  <h3>Lending Opportunities</h3>
                  <p>Find the best lending opportunities based on current demand.</p>
                  <button>Explore</button>
                </div>
                <div className="insight-card">
                  <h3>Borrowing Patterns</h3>
                  <p>Track borrowing patterns to better understand the market dynamics.</p>
                  <button>Analyze</button>
                </div>
              </div>
              </div>
          
         
      

        {/* Target Section */}
        <div ref={interestSectionRef} className="interest-section">
        <div className="simplecal">
      <div className="SIcontainer">
        <h2>Simple Interest Calculator</h2>
        <div className="input-group">
          <p>Enter the Principle Amount:</p>
          <input
            type="text"
            value={principle}
            onChange={(e) => setPrinciple(e.target.value)}
            placeholder="Enter principle amount"
          />
        </div>
        <div className="input-group">
          <p>Enter Interest Rate (annual %):</p>
          <input
            type="text"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter interest rate"
          />
        </div>
        <div className="input-group">
          <p>Enter the Time in Months:</p>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Enter time in months"
          />
        </div>
        <button className="submit-button" onClick={handleSIcal}>
          Submit
        </button>
        {result !== null && (
          <p className="result">
            Intrest amount: {result}
          </p>
          
          
        
        )}
        {result !== null && (
          <p className="result">
            Total amount: {amt}
          </p>
          
          
        
        )}

      </div>
    </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
