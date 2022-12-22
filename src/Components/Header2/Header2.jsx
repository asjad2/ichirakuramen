import "./Header2.css";

import img1 from "../../images/1.jfif";
import img2 from "../../images/2.jfif";
import img3 from "../../images/3.png";
import "aos/dist/aos.css";

const Header2 = () => {
  return (
    <div className="header2main  ">
      <h1 className="">Our Services</h1>
      <div className="divheader2">
        <div data-aos="fade-up-right" data-aos-duration="2000" className="card cardi" id="fff1" style={{ width: "18rem" }} >
          <img className=" h2img" src={img3} alt="" />
          <div className="card-body">
            <h5 className="card-title">Community</h5>
            <p className="card-text">
              We have a worldwide community of fans of anime and manga recipes.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000" className="card cardi" id="fff2" style={{ width: "18rem" }}>
          <img className=" h2img" src={img1} alt="" />
          <div className="card-body">
            <h5 className="card-title">Dining</h5>
            <p className="card-text">
              You can dine large collection of dishes served in Some Famous
              Anime.
            </p>
          </div>
        </div>
        <div data-aos="fade-up-left" data-aos-duration="2000" className="card cardi" id="fff3" style={{ width: "18rem" }}>
          <img className=" h2img" src={img2} alt="" />
          <div className="card-body">
            <h5 className="card-title">Take Away</h5>
            <p className="card-text">
              You can Take Away large collection of dishes served in Some Famous
              Anime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
