import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import FlashCardView from '../components/FlashCardView';
import { colors } from '../theme';

function GenCards() {
  const [file, setFile] = useState(null);
  const [flashCards, setFlashCards] = useState([
    { Question: 'What is 2 + 2', Answer: '4' }
  ]);

  // Styles
  const homepageStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: colors.secondary,
  };

  const contentStyle = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  };

  const cardStyle = {
    backgroundColor: colors.accent,
    color: colors.text,
    borderRadius: '0.75rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    padding: '2rem',
    maxWidth: '500px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  };

  const headingStyle = {
    margin: 0,
    textAlign: 'center',
    fontSize: '1.25rem',
  };

  const inputStyle = {
    padding: '0.75rem 1rem',
    border: `1px solid ${colors.text}33`,
    borderRadius: '0.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  const buttonStyle = {
    marginTop: '0.5rem',
    padding: '0.75rem',
    backgroundColor: colors.buttonBg,
    color: colors.buttonText,
    fontSize: '1rem',
    fontWeight: 600,
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    transition: 'transform 0.1s, background-color 0.2s',
  };

  const [btnHover, setBtnHover] = useState(false);
  const dynamicButtonStyle = {
    ...buttonStyle,
    backgroundColor: btnHover ? colors.buttonHoverBg : colors.buttonBg,
    transform: btnHover ? 'translateY(-2px)' : 'none',
  };

  // Handlers
  const sendFile = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('http://127.0.0.1:8000', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    setFlashCards(data);
  };

  return (
    <div style={homepageStyle}>
      <TopBar name="Generate FlashCards" />

      <div style={contentStyle}>
        <div style={cardStyle}>
          <h3 style={headingStyle}>Drop in a PDF to generate flashcards</h3>

          <input
            type="file"
            accept=".pdf, .pptx"
            style={inputStyle}
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button
            style={dynamicButtonStyle}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            onClick={sendFile}
          >
            Generate
          </button>

          {flashCards.length > 0 && (
            <FlashCardView flashcards_input={flashCards} />
          )}
        </div>
      </div>
    </div>
  );
}

export default GenCards;
