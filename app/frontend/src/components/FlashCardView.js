import { useState } from 'react';
import Card from './Card';
import { colors } from '../theme';

function FlashCardView({ flashcards_input }) {
  //call hooks unconditionally
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (!flashcards_input?.length) return null;

  const { question, answer } = flashcards_input[idx];

  const container = {
    width: '500px',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  const btn = {
    backgroundColor: colors.buttonBg,
    color: colors.buttonText,
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    margin: '0.25rem',
  };

  return (
    <div style={container}>
      <div>
        <button style={btn} onClick={() => { setIdx(Math.max(0, idx-1)); setFlipped(false); }}>
          Prev
        </button>
        <button style={btn} onClick={() => { setIdx(Math.min(flashcards_input.length-1, idx+1)); setFlipped(false); }}>
          Next
        </button>
      </div>
      <button style={btn} onClick={() => setFlipped(f => !f)}>
        Flip
      </button>
      <Card name={flipped ? answer : question} />
    </div>
  );
}

export default FlashCardView;