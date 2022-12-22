import React from "react";
import list from "./../../Components/Menu/Data/data";
import MenuCard from "./../../Components/MenuCard/MenuCard";
import "./menu.css"
import menuside from "../../images/menuside.jpg";

const Menu = ({ handleClick }) => {
  return (
    <div className=" menu">
      <div className="col-3">
        <img className="sidemenu " src={menuside} alt="" />
      </div>
      <div className="col-9">
        <div className="menucard">
          <h1>Itadakimasu</h1>
          <section>
            {list.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                handleClick={handleClick}
                description={item.description}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Menu;
