// src/pages/Form.jsx
import { useState } from 'react'
import { setTotal } from '../services/p.service';
import { FileManagment } from '../services/fileManagment.service';
import { sendFiles } from '../services/send.service';

import bannerImg from "../assets/Bannerv2.png"; 
import refSheet from "../assets/newCommSheet2024.jpg";
import comicsheet from "../assets/comic_sheet_2024.jpg";

import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import Field from "../components/Field";
import ChoiceBox from "../components/ChoiceBox";
import TextArea from "../components/TextArea";
import SendButton from "../components/SendButton";
import UploadFiles from "../components/UploadFiles";
import TextContent from '../components/TextContent';
import Image from '../components/Image';

import { useNavigate } from 'react-router-dom'

export default function Form() {

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

  const [commType, setCommType] = useState("LineArt (15$)");
  const [comicType, setComicType] = useState("No");
  const [background, setBackground] = useState("No");
  const [extraCht, setExtraCht] = useState("No extra character");
  const [details, setDetails] = useState("");
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [medias, setMedias] = useState("Yes");
  const [contact, setContact] = useState("Twitter");
  const [user,setUser] = useState('');
  const changeUsr = (e) =>{
    setUser(e.target.value);
  }

  // Manejo de imágenes adjuntas
  const handleFilesChange = (selectedFiles) => {
  setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  const newObjectUrls = selectedFiles.map(file => URL.createObjectURL(file));
  setPreviews((prevPreviews) => [...prevPreviews, ...newObjectUrls]);
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try{
      const Data = {
            type_of_commission : commType,
            comicType : comicType,
            backgr : background,
            extCharacer : extraCht,
            description : details,
            publish : medias,
            clientContact : user,
            clientSite : contact,
            total : 0
        }
      const manager = new FileManagment(Data,files)

      const zip = await manager.createZip();

      if(zip)
      {
        const result = await sendFiles(manager.getJson(),zip)
        if (result.state)
        {
          setLoading(false);
          console.log("Envio exitoso")
          navigate('/Success');
        }else{
          setLoading(false);
          alert("The form could not be sent, please try again");
        }

        if(!result.connect)
        {
          navigate('/')
        }
      }

    }catch(error)
    {
      console.error("Error in the form: ",error)
    }
    
  };

  return (

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
          backgroundColor: '#474d61', 
          minHeight: '600px'
        }}
      >
        <Title text="DavidTheWolfx10 Form"/>
        <Paragraph text={["If you're here, it's because you want a commission made by me","In this form you'll be able to write a description of what you want, send references of your characters, what type of commission you want and much more options, depending of the social media you want to contact, make sure you can receive incoming messages in your inbox in case if you're choosed for a slot"]}></Paragraph>
        <Title text="What I don't do" h='h3' noBorder={true}></Title>
        <b><Paragraph text="These are the type of pics I won't draw" noBorder={true}></Paragraph></b>
        <Paragraph className="shadow" text={["-Gore","-Underage","-Real People","-Unsanitary kinks (scat, diapers, etc.)"]} noBorder={true} ></Paragraph>
        <Title text="IMPORTANT" h='h4'></Title>
        <Paragraph noBorder={true} text={["I follow an order based if who pays first i start first, so if you commission is taken but you were the last on the \"list\", you'll have to wait until I finish the first ones.",
            "So you can choose if you want to pay now, or wait until your turn comes. That will be discussed in DMs in case that your commission is choosed"
        ]}></Paragraph>
        <Image url={refSheet} alt='commissionsheet'></Image>
        <Image url={comicsheet} alt='comicsheet'></Image>

        <form onSubmit={handleSubmit} className="mt-4">
          <ChoiceBox
            label="¿What type of commission would you like?"
            options={["LineArt (15$)","Flat/Colored (25$)","Shaded (35$)"]}
            values={["LineArt (15$)","Flat/Colored (25$)","Shaded (35$)"]}
            selectedValue={commType}
            onChange={setCommType}
          />
          <ChoiceBox
            label="¿It's a comic?"
            options={["No","Yes with 2 panels (+20%)","Yes with 3 panels (+40%)","Yes with 4 panels (+60%)","Yes with 5 panels (+80%)"]}
            values={["No","Yes with 2 panels (+20%)","Yes with 3 panels (+40%)","Yes with 4 panels (+60%)","Yes with 5 panels (+80%)"]}
            selectedValue={comicType}
            onChange={setComicType}
          />

          <Paragraph noBorder={true} text={["The percentage of the panels is based of the \"Base Price\" of the commission you choosed.",
            `For example if you choose 2 panels and the comic is a lineart(15$), it means the panel adds a 20% of the price base, in this case is 15$, adding 3$
being a total of 18`
          ]}></Paragraph>

          <ChoiceBox
            label="¿Do you want a background?"
            options={["Yes (+5$)","No"]}
            values={["Yes (+5$)","No"]}
            selectedValue={background}
            onChange={setBackground}
          />

          <ChoiceBox
            label="¿Extra characters?"
            options={["No extra character","1 extra character (+50%)","2 extra character (+100%)","3 extra character (+150%)"]}
            values={["No extra character","1 extra character (+50%)","2 extra character (+100%)","3 extra character (+150%)"]}
            selectedValue={extraCht}
            onChange={setExtraCht}
          />
          <Paragraph noBorder={true} text={["The percentage of the extra characters is based of the \"Base Price\" of the commission you choosed.",
            `For example you want only one extra character, and the commission type is LineArt, it means the price base is 15$, and the extra character would be a 50% of 15\n$
Adding 7.5 to 15, being a total of 22,5$, and in the end it will be rounded to the minimal integer: 22`
          ]}></Paragraph>

          <TextContent value={setTotal(commType,comicType,background,extraCht)}></TextContent>

          <TextArea
            label="Give me a description of your commission"
            placeholder="Describe pose, clothing, expressions, background if selected..."
            value={details}
            onChange={setDetails}
          />

          <UploadFiles 
            onFilesSelect={handleFilesChange} 
            filesPreview={previews}
          />

          <ChoiceBox
            label="¿Can I publish your commission on my social medias?"
            options={["Yes","Yes but I want to stay anonymous","No, I want to keep it private"]}
            values={["Yes","Yes but I want to stay anonymous","No, I want to keep it private"]}
            selectedValue={medias}
            onChange={setMedias}
          />

          <ChoiceBox
            label="¿Where you want me to contact you?"
            options={["Twitter", "Discord", "Bluesky"]}
            values={["Twitter", "Discord", "Bluesky"]}
            selectedValue={contact} 
            onChange={setContact}
          />
          <Field 
            labelText="Give me your @ of the website you want me to contact you if your commission is selected" 
            name="user"
            value={user}
            onChange={changeUsr}
            />

            <b><Paragraph noBorder={true} text="Terms"></Paragraph></b>
            <Paragraph text={["-I am entitled to reject a commission if the latter does not make me feel comfortable",
                "-Payment must be made before delivery of the drawing.",
                "-Please do not press the development of the drawing",
                "-The client will be able to see the sketches and advise any changes or details to avoid problems once the drawing is finished",
                "The client decides if wants the drawing be public or private",
                "-The client can share the drawing from his own account with the condition of giving credit to the artist",
                "-The client is entitled to want to remain anonymous or be mentioned in the publication"
            ]}></Paragraph>

          <SendButton disabled={loading} />
        </form>
        {/* <Field 
            labelText="Give me your @ of the website you want me to contact you if your commission is selected" 
            name="user"/>

        <ChoiceBox></ChoiceBox>
        <TextArea></TextArea>
        <SendButton></SendButton>
        {/* <UploadFiles></UploadFiles> */}
        

        {/* <div className="mt-4">
          <p className="text-center text-muted">Contenido del formulario aquí...</p>
        </div> */}
      </div>
      

    </div>
  );
}