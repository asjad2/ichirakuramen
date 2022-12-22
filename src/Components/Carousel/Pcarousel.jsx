import React from "react";
import {GrCaretNext,GrCaretPrevious} from "react-icons/gr"
import './Pcarousel.css';

import m1 from "./../../images/Galley/m1.jpg";
import m2 from "./../../images/Galley/m2.png";
import m3 from "./../../images/Galley/m3.jpg";
import m4 from "./../../images/Galley/m4.png";
import m5 from "./../../images/Galley/m5.jpg";
import m6 from "./../../images/Galley/m6.jpg";
import m7 from "./../../images/Galley/m7.jpg";
import m8 from "./../../images/Galley/m8.png";

const Pcarousel = () => {
  return(
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
   
      <h1 style={{}}>Restaurant Gallery</h1>
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
  
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={m5} className="d-block w-100 caroimg" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Kakashi and Naruto at Ichiraku </h5>
     
        </div>
      </div>
      <div className="carousel-item">
        <img src={m2} className="d-block w-100 caroimg" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Naruto Team7 enjoying at Ichiraku </h5>
        
        </div>
      </div>
      <div className="carousel-item">
        <img src={m3} className="d-block w-100 caroimg" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Adult Naruto Chilling with Sakura and Sasuke at Ichiraku </h5>
          
        </div>
      </div>
      <div className="carousel-item">
        <img src={m4} className="d-block w-100 caroimg" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Naruto with his friends eating Ramen at Ichiraku 
           </h5>
       
        </div>
      </div>
      <div className="carousel-item">
        <img src={m1} className="d-block w-100 caroimg" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Young Naruto eating his Favorite Ramen at Ichiraku 
          </h5>
         
        </div>
      </div>
      <div className="carousel-item">
        <img src={m6} className="d-block w-100 caroimg" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Iruka Sensei with both Young and Adult Naruto
           </h5>
        
        </div>
      </div>
      <div className="carousel-item">
        <img src={m7} className="d-block w-100 caroimg" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Cutest picture of Naruto with Sakura and Hinata 
      </h5>
   
        </div>
      </div>
      <div className="carousel-item">
        <img src={m8} className="d-block w-100 caroimg" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>The deadly Team Akatsuki at Ichiraku 
            </h5>
          
        </div>
    
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span  aria-hidden="true"><GrCaretPrevious className="nextbutton"/></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span  aria-hidden="true"><GrCaretNext className="nextbutton"/></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>   
  );
};

export default Pcarousel;
