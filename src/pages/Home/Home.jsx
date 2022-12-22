import React from "react";
import Header from "../../Components/Header/Header";
import "./Home.css";
import Pcarousel from "./../../Components/Carousel/Pcarousel";
import Header2 from "./../../Components/Header2/Header2"


const Home = () => {
  return (
    <div className="chome">
      <div className="row ">
        <div className="col cheader">
          <Header />
        </div>
      </div>
      <div className="row carousel1 ">
        <div className="col-10  " id="homecarousel">
          <Pcarousel />
        </div>
      </div>

      <div className="row cheader2">
        <div className=" ">
          <Header2 />
        </div>
      </div>
    </div>
  );
};

export default Home;
