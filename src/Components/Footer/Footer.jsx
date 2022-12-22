import React from "react";
import "./Footer.css";
import logi from "../../images/ramen1.png";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
   
    <div className="footi footer bg-dark">
      <footer className="d-flex flex-wrap justify-content-between align-items-center  border-top">
        <p className="col-md-4 mb-0 text-mut">&copy; 2022 Company, Inc</p>

        <Link
          to="/ichirakuramen"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <img src={logi} alt=""  className="logii "/>
        </Link>

        <ul className="nav col-md-4 justify-content-end d-flex ftext my-4  ">
          <li className="nav-item">
            <Link  to="/ichirakuramen"className="nav-link px-2 text-muted ">
              <p className="text-mut">Home</p> 
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ichirakuramen" className="nav-link px-2 text-muted">
            <p className="text-mut">Features</p> 
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ichirakuramen/list" className="nav-link px-2 text-muted">
            <p className="text-mut">List</p> 
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/restaurant/menuadmin" className="nav-link px-2 text-muted">
            <p className="text-mut">Menu Admin</p> 
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ichirakuramen/about" className="nav-link px-2 text-muted">
              <p className="text-mut">About</p> 
            </Link>
          </li>
          <ul className="nav col-md-6 my-1 justify-content-end align-items-centre list-unstyled d-flex">
        <li className="ms-3"><Link className="text-muted" to=""><svg className="bi" width="24" height="24"><BsFacebook className=" socialfooer"/></svg></Link></li>
        <li className="ms-3"><Link className="text-muted" to=""><svg className="bi" width="24" height="24"><BsTwitter className=" socialfooer"/></svg></Link></li>
        <li className="ms-3"><Link className="text-muted" to=""><svg className="bi" width="24" height="24"><BsInstagram className=" socialfooer"/></svg></Link></li>
        <li className="ms-3"><Link className="text-muted " to=""><svg className="bi" width="24" height="24"><BsGithub className=" socialfooer"/></svg></Link></li>

      </ul>
        </ul>
        
      </footer>
    </div>
  
  );
};

export default Footer;
