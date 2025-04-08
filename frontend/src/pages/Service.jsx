import NavBar from "../components/NavBar";
import Navimg from "../components/Navimg";
import Navimgtext from "../components/Navimgtext";
import Servicecard from "../components/Servicecard";
import CustomButton from "../components/Button";
import Footer from "../components/Footer";


const Service = () =>{
    return(
        <>
            <div style={{ position: "relative" }}>
                <Navimg />
                <NavBar />
                <div className="navimg-text-overlay">  
                    <Navimgtext heading={'Services'} />
                </div>
            </div>
            <div>
                <Servicecard/>
            </div>
           <div>
            <Footer/>
           </div>
            
        </>
    )
}

export default Service;