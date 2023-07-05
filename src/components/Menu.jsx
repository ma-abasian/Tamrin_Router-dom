import Card from "./Card.jsx";
import '../assets/css/menu.css';
import {foodData} from './foodData.js';

export const Menu = () => {
  return (
      <div className="menu">
        <h1 className="menu__title">Our Menu</h1>
        <div className="menu__card-container">
          {foodData.map(item => <Card key={item.id} foodData={item}/>)}
        </div>

      </div>
  );
};

