import TopBar from '../components/TopBar';
import FlashCardView from '../components/FlashCardView';
import { colors } from '../theme';

export default function HomePage({ flashcards }) {
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  };

  const contentStyle = {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    padding: '2rem',
  };

  const bubbleStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.accent,
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    textAlign: 'center',
    color: colors.text,
    gap: '1rem',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  };

  const subheadingStyle = {
    fontSize: '1.2rem',
    fontWeight: 'normal',
    marginBottom: '0.5rem',
  };

  const creditsStyle = {
    fontSize: '0.9rem',
    fontStyle: 'italic',
    marginTop: '1rem',
  };

  return (
    <div style={layoutStyle}>
      <TopBar name="PerfectStudy" />
      <div style={contentStyle}>
        <div style={bubbleStyle}>
          <FlashCardView flashcards_input={flashcards} />
          <h1 style={headingStyle}>Study better with PerfectStudy</h1>
          <h3 style={subheadingStyle}>
            Generate flashcards with your own PDFs and Presentations
          </h3>
          <h3 style={subheadingStyle}>
            Practice topics with the Feynman Technique
          </h3>
          <h5 style={creditsStyle}>
            Made by Alex Kim, Ayob Ouardi, Nahom Wondimu, Raunak Maheshwari,
            and Sakib Niaz
          </h5>
        </div>
      </div>
    </div>
  );
}
