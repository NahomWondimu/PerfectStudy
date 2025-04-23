import './App.css';
import React, {useState} from "react";


function App() {
  const [file, setFile] = useState("");
  const [flashCards, setFlashCards] = useState("")

  
  const sendFile = async () => {

    const formData = new FormData()
    formData.append('file', file)

    const response = await fetch("http://127.0.0.1:8000", {
      method: "POST",
      body: formData
    })

    const json = await response.json()
    console.log(json);
    setFlashCards(json)
}
  
  

  return (
    <>

        <div className="center">
          <h1 className="header">PerfectStudy</h1>
          
        </div>

        <h3 className="header center">Drop in a PDF to generate flashcards.</h3>
        <input type="file" onChange={e => setFile(e.target.files[0])}></input>
        <button form="post" onClick={sendFile}>Enter</button>

    </>
    
  );
}

export default App;
