import { useSelector } from "react-redux";
import '../styles/Whatdo.css'
import CustomButton from "./Button";

const Whatdo = () => {
  const services = useSelector((state) => state.service);

  return (
    <div className="container py-5 bg-light">
      <div className="text-center mb-5 do">
        <h3 className="text-uppercase text-secondary">What We Do</h3>
        <h1 className="fw-bold">Premium Catering Services</h1>
      </div>

      <div className="row g-4">
        {services.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 d-flex"
          >
            <div className="card service-card w-100 shadow-sm border-0" style={{ borderRadius: "20px" }}>
              <img
                src={Object.values(item.images)[0]}
                className="card-img-top service-card-img"
                alt={item.heading}
                style={{ height: "200px", objectFit: "cover", borderRadius: "20px" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-primary">{item.heading}</h5>
                <p className="card-text text-muted">{item.paragraph}</p>
              </div>
            </div>
          </div>
        ))}
         {/* <div className="text-center">
            <CustomButton text={'View All Services'}/>
        </div> */}
      </div>
    </div>
  );
};

export default Whatdo;
