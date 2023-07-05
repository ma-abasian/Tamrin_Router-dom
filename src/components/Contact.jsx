import ContactBanner from "../assets/images/Form.png";
import "../assets/css/Contact.css/"
import {Link} from "react-router-dom";

export const Contact = () => {
  return (
      <div className="contact">
        <div className="contact__banner">
          <img src={ContactBanner} alt="Contact Banner"/>
        </div>
        <div className="contact__form">
          <h1 className="contact__title">Contact Us</h1>
          <form>
            <input type="text" className="input" placeholder="Full Name"/>
            <input type="email" className="input" placeholder="Email Address"/>
            <textarea placeholder="Enter Your Message" className="input" name="" id="" cols="30" rows="10"></textarea>

            <Link className="contact__button" to="/">Send Message</Link>
          </form>
        </div>
      </div>
  );
};
