import React from 'react';
import logo3 from './images/logo3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './styles/footer.css';

export default function Footer() {
  return (
    <>
      <div className='MyFooter'>
        <div className='FooterContainer'>
          <div className='Footlogo'> 
            <div className="Flogo">
              <img src={logo3} alt="LendLog Logo" />
            </div>
            <div className="Fhead">
              <h1>LendLog</h1>
            </div>
          </div>
          <div className='Footname'>
            <h1>Download</h1>
            <br />
            <p>Windows app</p>
            <p>Mac app</p>
            <p>Linux app</p> {/* Corrected */}
            <p>Desktop app</p>
            <br />
            <h1>Services</h1>
            <br />
            <p>Design</p>
            <p>Development</p>
          </div>
          <div className='Footapp'>
            <h1>Products</h1>
            <br />
            <p>Web</p>
            <p>App</p>
            <p>Software</p>
            <br />
            <h1>Company</h1>
            <br />
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className='Footweb'>
            <h1>Get in touch</h1>
            <div className="bigicon">
              <div className="facebook-icon">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </div>
              <div className="instagram-icon">
                <FontAwesomeIcon icon={faInstagramSquare} />
              </div>
              <div className="linkedin-icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
              <div className="twitter-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </div>
            <br />
            <div className="input1">
              <div className='Fverfy'>
                <label>
                  <input type="email" placeholder='Enter email address' />
                </label>
              </div>
              <div className="sub">
                <button>Subscribe</button>
              </div>
            </div>
          </div>                                                                                        
        </div>
        <div className='Fpart'>
          <p>@2024 LendLog. All rights reserved</p> 
        </div>
      </div>
    </>
  );
}
