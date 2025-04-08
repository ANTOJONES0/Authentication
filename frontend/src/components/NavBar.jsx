import React from "react";
import logo from "../assets/images/logo.png"; 
import '../styles/NavBar.css';



const NavBar = () => {
  return (
    <div className="navigation">  {/* Wrapper div with correct positioning */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid px-5">
          <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto gap-lg-5 gap-0">
              <li className="nav-item"><a className="nav-link fs-5" href="/home">Home</a></li>
              <li className="nav-item"><a className="nav-link fs-5" href="/about">About</a></li>
              <li className="nav-item"><a className="nav-link fs-5" href="/services">Services</a></li>
              <li className="nav-item"><a className="nav-link fs-5" href="/blogs">Blogs</a></li>
              <li className="nav-item"><a className="nav-link fs-5" href="/contact">Contact</a></li>
            </ul>
            <form className="d-flex">
              
              <button className="btn btn-outline-success" type="submit">Book Now</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;




