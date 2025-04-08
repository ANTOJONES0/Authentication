import { useSelector } from "react-redux";
import "../styles/Servicecard.css"; // custom styles

const Servicecard = () => {
  const services = useSelector((state) => state.service);

  return (
    <div className="container py-5 bg-light">
      <div className="row g-5">
        {services.map((item, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 d-flex"
            
          >
            <div className="card service-card w-100"style={{backgroundColor:' #F7F4ED'}}>
              <img
                src={Object.values(item.images)[0]}
                className="card-img-top service-card-img"
                alt={item.heading}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-primary" style={{fontFamily: 'Arial'}}>{item.heading}</h5>
                <p className="card-text text-muted">{item.paragraph}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicecard;
