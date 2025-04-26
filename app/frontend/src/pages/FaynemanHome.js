import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import TextBoxInput from './TextBoxInput';
import FeynmanEnd from './FeynmanEnd';
import { colors, borderRadius, boxShadow } from '../theme';

export default function FeynmenHome() {
  // State hooks...
  const [topic, setTopic] = useState('');
  const [elementaryResponse, setElementaryResponse] = useState('');
  const [middleSchoolResponse, setMiddleSchoolResponse] = useState('');
  const [highSchoolResponse, setHighSchoolResponse] = useState('');
  const [generatedResponse, setGeneratedResponse] = useState(null);
  const navigate = useNavigate();

  // Style constants
  const homepageStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  };

  const contentStyle = {
    flex: 1,
    padding: '2rem',
    backgroundColor: colors.secondary,
    color: colors.accent,
  };

  const formStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: colors.navBg,
    padding: '2rem',
    borderRadius,
    boxShadow,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  };

  const groupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 600,
    color: colors.accent,
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    borderRadius,
    border: '1px solid #334155',
    backgroundColor: colors.secondary,
    color: colors.accent,
  };

  const buttonStyle = {
    padding: '0.75rem',
    backgroundColor: colors.buttonBg,
    color: colors.buttonText,
    fontWeight: 700,
    border: 'none',
    borderRadius,
    cursor: 'pointer',
    boxShadow,
    transition: 'background-color 0.2s ease',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ...fetch logic
  };

  return (
    <div style={homepageStyle}>
      <TopBar name="Feynman Technique" />
      <main style={contentStyle}>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={groupStyle}>
            <label style={labelStyle}>Topic</label>
            <input
              style={inputStyle}
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
              placeholder="E.g., Quantum Mechanics"
            />
          </div>

          <TextBoxInput
            label="Elementary School Explanation"
            value={elementaryResponse}
            onChange={setElementaryResponse}
            placeholder="Explain in simple terms..."
            groupStyle={groupStyle}
            labelStyle={labelStyle}
            inputStyle={inputStyle}
          />

          <TextBoxInput
            label="Middle School Explanation"
            value={middleSchoolResponse}
            onChange={setMiddleSchoolResponse}
            placeholder="Add some detail..."
            groupStyle={groupStyle}
            labelStyle={labelStyle}
            inputStyle={inputStyle}
          />

          <TextBoxInput
            label="High School Explanation"
            value={highSchoolResponse}
            onChange={setHighSchoolResponse}
            placeholder="Use technical terms..."
            groupStyle={groupStyle}
            labelStyle={labelStyle}
            inputStyle={inputStyle}
          />

          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.primary)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.buttonBg)}
          >
            Submit
          </button>
        </form>

        {generatedResponse && <FeynmanEnd data={generatedResponse} />}
      </main>
    </div>
  ); (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <TopBar name="Feynman Technique" />
      <main style={{ flex: 1, padding: '2rem', backgroundColor: colors.secondary, color: colors.accent }}>
        <form onSubmit={handleSubmit} style={formStyles}>
          <div style={groupStyles}>
            <label style={labelStyles}>Topic</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
              placeholder="E.g., Quantum Mechanics"
              style={{ ...inputStyles, ...placeholderStyles }}
            />
          </div>

          <TextBoxInput
            label="Elementary School Explanation"
            value={elementaryResponse}
            onChange={setElementaryResponse}
            placeholder="Explain in simple terms..."
            inputStyle={{ ...inputStyles, ...placeholderStyles }}
            labelStyle={labelStyles}
            groupStyle={groupStyles}
          />

          <TextBoxInput
            label="Middle School Explanation"
            value={middleSchoolResponse}
            onChange={setMiddleSchoolResponse}
            placeholder="Add some detail..."
            inputStyle={{ ...inputStyles, ...placeholderStyles }}
            labelStyle={labelStyles}
            groupStyle={groupStyles}
          />

          <TextBoxInput
            label="High School Explanation"
            value={highSchoolResponse}
            onChange={setHighSchoolResponse}
            placeholder="Use technical terms..."
            inputStyle={{ ...inputStyles, ...placeholderStyles }}
            labelStyle={labelStyles}
            groupStyle={groupStyles}
          />

          <button
            type="submit"
            style={buttonStyles}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.primary)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.buttonBg)}
          >
            Submit
          </button>
        </form>

        {/* Render results below form without navigation */}
        {generatedResponse && <FeynmanEnd data={generatedResponse} />}
      </main>
    </div>
  );
}
