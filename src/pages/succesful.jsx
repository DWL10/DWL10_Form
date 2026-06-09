import bannerImg from "../assets/Bannerv2.png"; 
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import SendButton from "../components/SendButton";
import { useNavigate } from "react-router-dom";
export default function Succesful()
{
    const navigate = useNavigate();
    const headerStyle = {
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center center', 
        backgroundRepeat: 'no-repeat',       
        top: 0,
        zIndex: 9999,
        maxWidth: '1000px', 
        height: '120px',
        width: '100%',                       
        margin: '0 auto',                    
    };

    return(
        <div className="container-fluid d-flex flex-column align-items-center py-4">
            <header 
                className="w-100 sticky-top rounded-4 d-flex justify-content-center align-items-center text-white shadow mb-4"
                style={headerStyle}
            >
            </header>
            <div 
                className="w-100 rounded-5 overflow-hidden shadow p-4"
                style={{ 
                maxWidth: '800px', 
                backgroundColor: '#474d61'
                }}
            >
                <Title text="The form has been succesfully sent!" h="h2"/>
                <div className="d-flex align-items-center">
                    <Paragraph
                    noBorder={true}
                    text="Thank you! I really appreciate your support by sending a form! If your form is selected, i'll contact you through the site you chose"
                    />

                </div>
                <SendButton text="Send more forms" onClick={() => navigate('/Online')}/>
            </div>
        </div>
    );
}