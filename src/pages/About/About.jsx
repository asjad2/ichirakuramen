import React from "react";

import sushi1 from "./../../images/sushi.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="about__text">
        <div className="row">
          <h1>Welcome to Konoha Village</h1>
          <div className="row">
            <div className="col">
              <p>Ramen Ichiraku was founded by Teuchi thirty-four years</p>
              <p>
                Ramen Ichiraku has always been popular with Konoha's villagers
                because of Teuchi's strongcommitmentto taste,giving the ramen an
                almost artistic quality. Like any ramen establishment Ramen
                Ichiraku offers various toppings, such as char siu and boiled
                eggs
              </p>
              <p>
                There is a real-life ramen restaurant, also called Ichiraku
                Ramen, in Fukuoka, Japan, near where locals say Masashi
                Kishimoto went to university (Kyushu Sangyo Daigaku). The
                restaurant has two locations: one near JR's Kyu-dai Mae station,
                very close to the university, and a second in the downtown
                Hakata area. The restaurants sell handkerchiefs emblazoned with
                various Naruto characters that come in noodle cups labelled
                "Ichiraku Ramen".
              </p>

              <div className="about__btn">
                <a
                  href="https://naruto.fandom.com/wiki/Ramen_Ichiraku"
                  className="btn btn-smart"
                >
                  READ MORE
                </a>
              </div>
            </div>
            <div className="col">
              <div className="about__img">
                <img className="sushi" src={sushi1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
