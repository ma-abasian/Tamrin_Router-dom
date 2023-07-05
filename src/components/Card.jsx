import React from 'react';
import {Link} from "react-router-dom";


const Card = ({foodData}) => {

  const {title,id,image,price} = foodData;

  return (
      <div className="menu__card">
        <div className="card__image">
          <Link to={`/menu/${id}`} >
            <img src={image} alt=""/>
          </Link>
        </div>
        <div className="card__content">
          <Link to={`/menu/${id}`}>
            <h4 className="card__title">{title}</h4>
          </Link>
          <p className="card__text">
            {price}
          </p>
        </div>
      </div>
  );
};

export default Card;