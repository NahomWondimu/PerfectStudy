import TopBar from './TopBar.js';
import NavBar from './NavBar.js';
import { useState } from 'react';
import TextBoxInput from './TextBoxInput.js';
import { useNavigate } from 'react-router-dom';

function FaynmenHome(){
  const [count, setCount] = useState(0);
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
    
  return (
    <>
      <div style={homepageStyle}>
        <TopBar name="Feynmen Technique" />
        <div style={contentStyle}>
          <div style={sidebarStyle}>
            <NavBar />
          </div>
          <div style={mainContentStyle}>
            {renderInput(count)}
            <button onClick={next}>next</button>
          </div>
        </div>
      </div>
    </>
  );

}

export default FaynmenHome;