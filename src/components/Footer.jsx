import {logos} from "./logos.js";
import "../assets/css/footer.css"
import SocialItem from "./SocialItem.jsx";

const Footer = () => {
  return (
      <footer className="footer container">
        <div className="footer__social">
          <ul>
            {logos.map(item =>
                <SocialItem key={item} item={item}/>
            )}
          </ul>
        </div>
        <div className="footer__copyright">
          &copy; 2023 AnyThing.com
        </div>
      </footer>
  );
};

export default Footer;