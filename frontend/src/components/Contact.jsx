// import "./contact.css";
 import support from"./images/support.png";
import Header2 from "./Header2";
import "./styles/contact.css"
import { NavLink } from "react-router-dom";
function Contact() {
  return (
    <>
    {/* <Header2/> */}
      <div class="contactus">
        <div class="support">
          <div class="support-img">
            <img src={support} />
          </div>
          <div>
            <span>Fell free to ask us!</span>
            <br />
            <input type="text" placeholder="Name" id="name" />
            <br />
            <input type="email" placeholder="Email Address" id="email" />
            <br />
            <input type="text" placeholder="Phone Number" id="ph-no" />
            <br />
            <input type="textarea" placeholder="Query" id="query" />
            <br />
            <input type="submit" id="submit" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
