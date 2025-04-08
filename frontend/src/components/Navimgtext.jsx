import CustomButton from "./Button";
import '../styles/Navimgtext.css';
const Navimgtext = ({heading,paragraph}) => {
    return (
        <>
            <div className="text">
                <h2 className="fw-bold">{heading}</h2>
                <p>{paragraph}</p>
                <CustomButton text={'Explore'}/>
                <CustomButton text={'Contact'}/>
            </div>
        </>
    )
}

export default Navimgtext;