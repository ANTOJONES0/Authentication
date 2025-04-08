import NavBar from "../components/NavBar";
import Navimg from "../components/Navimg";
import Navimgtext from "../components/Navimgtext";
import Aboutmessage from "../components/Aboutmessage";
import Whatdo from '../components/Whatdo'
import Service from "./Service";
import WhyChoose from "../components/Whychoose";
import '../styles/Home.css';
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <div style={{ position: "relative" }}>
                <Navimg />
                <NavBar />
                <div className="navimg-text-overlay">  
                    <Navimgtext heading={'Welcome to Jupiter Catering'} paragraph={'We are the top vegetarian wedding caterer in Tamil Nadu. We have completed over 2,000+ weddings, supported by a professional team of 340 members.'} />
                </div>
            </div>
            <div >
                <Aboutmessage />
            </div>
            <div>
                <Whatdo/>
            </div>
            <div>
                <WhyChoose/>
            </div>

            {/* <Service/> */}

            <div>
                <Footer/>
            </div>







        </>
    );
};

export default Home;
