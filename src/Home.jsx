import "./assets/css/home.css";
import {Link} from "react-router-dom";
import Banner from "./assets/images/Banner.png";


export const Home = () => {
  return (
      <div className="home">
        <div className="home__banner">
          <img src={Banner} alt="Banner"/>
        </div>
        <div className="home__button">
          <Link to="/menu">ORDER NOW</Link>
        </div>
      </div>
  );
};
