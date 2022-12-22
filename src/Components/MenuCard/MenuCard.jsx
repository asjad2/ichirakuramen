import React from "react";
import { Link } from "react-router-dom";
import "./menucard.css"
import "aos/dist/aos.css";
const MenuCard = ({ item, handleClick }) => {
  const { title, description, price, img } = item;
  return (
    <div className="menucard">
      
      <div  data-aos="fade-up" data-aos-duration="1500" className="card card2 " >
        <img src={img} className="card-img-top top-img" alt="" />
        <div className="card-body gf">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">From {description} Anime</p>
          <p className="card-text">Price:¥{price}</p>
         <Link to=""> <button  className="btn " id="btn1"  onClick={() => handleClick(item)}>
            Add to Cart
          </button></Link>
 
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

