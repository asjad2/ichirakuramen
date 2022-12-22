import React, { useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logoooo.png"
import AOS from 'aos';
import "aos/dist/aos.css";
const Header = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="Header">
      <div className="banner">
        <div className="banner__content">
          <div className="banner__text" data-aos="fade-zoom-in" data-aos-duration="2500">
            <h3 >Ichiraku Ramen</h3>
            <h1>Chef Teuchi</h1>
            <p>
              "I'm Teuchi! What I like is cooking ramen, especially the kind
              Naruto Likes"
            </p>
            <Link
              to="/ichirakuramen/menu"
              className="  text-light nav-link active"
            >
              <button className="banner__btn ">Itadakimasu</button>
            </Link>
          </div>
        </div>
      </div>
      <img  data-aos="fade-down-left"  data-aos-duration="2500" id="headerimg" src={logo} alt="" />
    </div>
  );
};

export default Header;
