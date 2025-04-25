import TopBar from './TopBar.js';
import NavBar from './NavBar.js';
import { useState } from 'react';
import TextBoxInput from './TextBoxInput.js';
import { useNavigate } from 'react-router-dom';
import FeynmanEnd from './FeynmanEnd.js';

function FaynmenHome(){
  const [count, setCount] = useState(0);
  
  const [topic, setTopic] = useState("")
  const [elementaryResponse, setElementaryResponse] = useState("")
  const [middleSchoolResponse, setMiddleSchoolResponse] = useState("") 
  const [highSchoolResponse, setHighSchoolResponse] = useState("")
  const [generatedResponse, setGeneratedResponse] = useState([])

  const nav = useNavigate();

  const next = () => {
    if(count < 5){
      setCount(count + 1);
    }
  }

  function renderInput(count) {
    switch (count) {
      case 0:
        return <TextBoxInput prompt='prompt1' />;
      case 1:
        return <TextBoxInput prompt='prompt2' />;
      case 2:
        return <TextBoxInput prompt='prompt3' />;
      case 3:
        return <TextBoxInput prompt='prompt4' />;
      default:
        nav('/FeynEnd');
    }
  }

  const homepageStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
  };
    
  const contentStyle = {
    display: 'flex',
    flex: 1,
  };
    
  const sidebarStyle = {
    width: '200px',
    backgroundColor: 'rgba(0, 128, 0, 0.5)',
  };

  const mainContentStyle = {
    flex: 1,
    backgroundColor: '#fff',
    padding: '20px',
    color: '#000',
  };

  const sendData = async() => {

      const formData = new FormData()
      formData.append('topic', topic)
      formData.append('elementaryResponse', elementaryResponse)
      formData.append('middleResponse', middleSchoolResponse)
      formData.append('highResponse', highSchoolResponse)
      const response = await fetch("http://127.0.0.1:8000/FeynHome", {
          method: "POST",
          body: formData
      })

      const data = await response.json()

      setGeneratedResponse(data);





  }
    
  return (
    <>
      <div style={homepageStyle}>
        <TopBar name="Feynmen Technique" />
        <div style={contentStyle}>
          <div style={sidebarStyle}>
            <NavBar />
          </div>
          <div style={mainContentStyle}>
            <form>
              <label>
                Enter the topic you want to recall.
                <input type="text" onChange={e => setTopic(e.target.value)} required></input>
              </label>
              <h3>Recite the topic as if you were explaining it to a..</h3>
              <div>
                <label>
                  Elementary School Student
                  <input type="text" onChange={e => setElementaryResponse(e.target.value)} required></input>
                </label>
              </div>
              
              <div>
                <label>
                  Middle School Student
                  <input type="text" onChange={e => setMiddleSchoolResponse(e.target.value)} required></input>
                </label>
              </div>
              
              <div>
                <label>
                  High School Student
                  <input type="text" onChange={e => setHighSchoolResponse(e.target.value)} required></input>
                </label>
              </div>
              

              <button form="post" type="submit" onClick={sendData}>Submit</button>
            </form>
            
            {generatedResponse.length > 0 ? <FeynmanEnd data={generatedResponse}/> : null}
            
          </div>
        </div>
      </div>
    </>
  );

}

export default FaynmenHome;