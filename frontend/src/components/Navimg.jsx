
import bck from '../assets/images/bck.jpeg'

const Navimg = () => {
    return (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            <img src={bck} alt="Hero" style={{ width: "100%", height: "80%", objectFit: "cover" }} />
        </div>
    );
};

export default Navimg;
