import TopBar from '../components/TopBar';
import FlashCardView from '../components/FlashCardView';
import {useState} from "react";
import { colors } from '../theme';

function GenCards(){

  const homepageStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
};

    const contentStyle = {
      display: 'flex',
      flex: 1,
      backgroundColor: colors.secondary,
    };
  
    const mainContentStyle = {
      color: colors.accent,
    };

    const buttonElem = {
      color: colors.text,
    }

    const [file, setFile] = useState("");
    const [flashCards, setFlashCards] = useState([{"Question": "What is 2 + 2", "Answer": "4"}])

  
    const sendFile = async () => {
        const formData = new FormData()
        formData.append('file', file)

        const response = await fetch("http://127.0.0.1:8000", {
        method: "POST",
        body: formData
        })

        const data = await response.json();
        setFlashCards(data);
        
    }

    return(
        <>
        <div style={homepageStyle}>
          <TopBar name='Generate FlashCards'/>
          <div style={contentStyle}>
            <div style={mainContentStyle}>
            <h3>Drop in a PDF or PPTX to generate flashcards.</h3>
            <input type="file" onChange={e => setFile(e.target.files[0])} accept=".pdf,.pptx"></input>
            <button form="post" onClick={sendFile}>Enter</button>
            {flashCards.length > 0 ? <FlashCardView flashcards_input={flashCards}/> : console.log(flashCards)}
            </div>
          </div>
        </div>
        </>
    );
}

export default GenCards;