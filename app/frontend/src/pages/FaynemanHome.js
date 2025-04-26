import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar.js';
import FeynmanEnd from './FeynmanEnd.js';
import { colors } from '../theme.js';

function FeynmenHome() {
  const [topic, setTopic] = useState('');
  const [elementaryResponse, setElementaryResponse] = useState('');
  const [middleSchoolResponse, setMiddleSchoolResponse] = useState('');
  const [highSchoolResponse, setHighSchoolResponse] = useState('');
  const [generatedResponse, setGeneratedResponse] = useState([]);
  const navigate = useNavigate();

  const homepageStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: '24px',
    backgroundColor: colors.secondary,
  };

  const boxStyle = {
    width: '600px',
    borderRadius: '12px',
    backgroundColor: colors.accent,
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    color: colors.text,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const textBoxStyle = {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const buttonStyle = {
    color: colors.buttonText,
    width: '100%',
    fontWeight: 500,
    backgroundColor: colors.buttonBg,
    padding: '0.75rem',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('topic', topic);
    formData.append('elementaryResponse', elementaryResponse);
    formData.append('middleResponse', middleSchoolResponse);
    formData.append('highResponse', highSchoolResponse);

    const response = await fetch('http://127.0.0.1:8000/FeynHome', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    setGeneratedResponse(data);
  };

  return (
    <div style={homepageStyle}>
      <TopBar name="Feynman Technique" />
      <div style={contentStyle}>
        <div style={boxStyle}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3>Topic</h3>
            <input
              type="text"
              style={textBoxStyle}
              placeholder="E.g. Quantum Physics"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            />

            <h3>Explain The Topic to...</h3>

            <div>
              <label htmlFor="elementaryschool">Elementary Schooler</label>
              <textarea
                id="elementaryschool"
                style={textBoxStyle}
                rows={3}
                placeholder="Start typing here"
                value={elementaryResponse}
                onChange={(e) => setElementaryResponse(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="middleschool">Middle Schooler</label>
              <textarea
                id="middleschool"
                style={textBoxStyle}
                rows={3}
                placeholder="Start typing here"
                value={middleSchoolResponse}
                onChange={(e) => setMiddleSchoolResponse(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="highschool">High Schooler</label>
              <textarea
                id="highschool"
                style={textBoxStyle}
                rows={3}
                placeholder="Start typing here"
                value={highSchoolResponse}
                onChange={(e) => setHighSchoolResponse(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              style={buttonStyle}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.buttonBg)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div style={contentStyle}>
          {generatedResponse.length > 0 && (
            <div style={{ ...boxStyle, marginTop: '24px' }}>
              <h3>Generated Explanation</h3>
              <FeynmanEnd data={generatedResponse} />
            </div>
          )}
      </div>
    </div>
  );
}

export default FeynmenHome;
