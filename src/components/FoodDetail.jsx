import {useNavigate, useParams} from "react-router-dom";
import '../assets/css/foodDetail.css'
import {foodData} from './foodData.js';
import NotFound from "./NotFound.jsx";

export const FoodDetail = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const food = foodData.find( f => f.id === Number(id))
  if(!food) {
    return (
        <div>
          <NotFound/>
        </div>
    )
  }
  return (
      <div className="detail">
        <button className="detail__button" onClick={() => navigate("/menu")}>❌</button>
        <div className="detail__banner">
          <img src={food.image} alt={food.title}/>
        </div>
        <div className="detail__content">
          <h1 className="detail__title">{food.title}</h1>
          <p className="detail__text">{food.description}</p>
          <p className="detail__price">{food.price} T</p>
        </div>
      </div>
  );
};

