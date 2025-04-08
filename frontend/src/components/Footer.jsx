import React from "react";
import logo from "../assets/images/logo.png"; // Replace with your logo path
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer-section text-white pt-5 pb-4">
      <div className="container">
        <div className="row text-center text-md-start">

          {/* Logo & About */}
          <div className="col-md-3 mb-4">
            <img src={logo} alt="Event Feast" width="100" height='50' className="mb-3" />
            <h5 className="text-warning fw-bold">Event Feast</h5>
            <p>Your trusted partner for premium event catering services. We serve joy on every plate.</p>
          </div>

          {/* Useful Links */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/menu" className="footer-link">Menu</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
            <p>Email: hello@eventfeast.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Chennai, India</p>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Follow Us</h6>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <hr className="footer-line" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Event Feast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
