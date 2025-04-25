import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import FlashCardView from '../components/FlashCardView';
import {useState} from "react";

function GenCards(){

    const homepageStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    };

    const [file, setFile] = useState("");
    const [flashCards, setFlashCards] = useState([{"Question": "What is 2 + 2", "Answer": "4"}])

    /*const returnFlashcardData = () => {
        if (flashCards) {
            return <FlashCardView name={flashCards}/>
        }
        return null;
    }*/
  
    const sendFile = async () => {
        const formData = new FormData()
        formData.append('file', file)

        const response = await fetch("http://127.0.0.1:8000", {
        method: "POST",
        body: formData
        })

        const data = await response.json();
        setFlashCards(data);
        //returnFlashcardData()
        //{flashCards && flashCards.length > 0 ? <FlashCardView flashcards_input={flashCards}/> : null}
        
        

    }

    

    return(
        <>
        <div style={homepageStyle}>
          <TopBar name='Generate FlashCards'/>
          <NavBar/>
          <div>
            <h3>Drop in a PDF to generate flashcards.</h3>
            <input type="file" onChange={e => setFile(e.target.files[0])}></input>
            <button form="post" onClick={sendFile}>Enter</button>
            {flashCards.length > 0 ? <FlashCardView flashcards_input={flashCards}/> : console.log(flashCards)}
            

          </div>
        </div>
        
       
        </>
    );
}

export default GenCards;