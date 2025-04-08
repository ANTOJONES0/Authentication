import React from 'react';
import { useSelector } from "react-redux";
import CustomButton from './Button';
import '../styles/Aboutmessage.css';
import aboutimg from '../assets/images/aboutimg1.jpg';
import aboutimg1 from '../assets/images/aboutimg2.avif';
import exp1 from "../assets/images/experience1.png"; 
import exp2 from "../assets/images/experience2.png"; 
import exp3 from "../assets/images/experience3.png"; 

const Aboutmessage = () => {
  const about = useSelector(state => state.about);

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        
        {/* Image 1 */}
        <div className="col-md-3 mb-3 about-img ">
          <img src={aboutimg} alt="Beautifully presented dishes" className="img-fluid rounded shadow" />
        </div>

        {/* Image 2 */}
        <div className="col-md-3 mb-3 about-img">
          <img src={aboutimg1} alt="Beautifully presented dishes" className="img-fluid rounded shadow" />
        </div>

        {/* Text Section */}
        <div className="col-md-6 text-center text-md-start do">
          <h5 className="display-5 fw-bold mb-3 ">About us</h5>
          <h2>{about[0].heading}</h2>
          

          {/* Experience Cards */}
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              <div className="card p-2 custom-shadow text-center" style={{ width: "10rem" }}>
                <img src={exp1} className="card-img-top expimg mx-auto pt-3" alt="Experience" style={{ width: "4rem" }} />
                <div className="card-body">
                  <p className="card-text">25 years of experience </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              <div className="card p-2 custom-shadow text-center" style={{ width: "10rem" }}>
                <img src={exp2} className="card-img-top expimg mx-auto pt-2" alt="Events" style={{ width: "4rem" }} />
                <div className="card-body">
                  <p className="card-text">2000+ successful events</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              <div className="card p-2 custom-shadow text-center" style={{ width: "10rem" }}>
                <img src={exp3} className="card-img-top mx-auto pt-3" alt="Customers" style={{ width: "4rem" }} />
                <div className="card-body">
                  <p className="card-text">98% repeated customers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className='mt-4'>
            <CustomButton text={'More About Us'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutmessage;
