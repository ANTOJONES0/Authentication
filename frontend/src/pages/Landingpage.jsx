import { Link } from "react-router-dom";
import '../styles/Landingpage.css'; // Optional custom styling
import sauce from '../assets/images/saucy.png'
import back from '../assets/images/back.png'

const Landingpage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold d-flex align-items-center fs-4" to="/">
            <img src={sauce} alt="Saucy Spoon Logo" height={40} />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-3">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-light me-2 px-3 rounded-pill" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-warning px-3 rounded-pill fw-semibold text-white" to="/dashboard">Book Now</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Landing Page Background Section */}
      <div
        className="landing-hero text-white d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${back})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '88.5vh',
          padding: '50px'
        }}
      >
        <div>
          <h1 className="display-4 fw-bold does">Delicious Moments, <br />that Saucy spoon Deliveres</h1>
          <p className="lead does" >Catering that celebrates flavor, festivity & finesse.</p>
          <Link className="btn btn-warning px-4 py-2 rounded-pill fw-semibold text-white mt-3" to="/dashboard">Book Your Event</Link>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
