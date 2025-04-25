import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import FlashCardView from '../components/FlashCardView';
import { colors } from '../theme';

export default function HomePage({ flashcards }) {
  const layout = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  };
  const content = {
    display: 'flex',
    flex: 1,
  };
  const main = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    padding: '2rem',
  };

  return (
    <div style={layout}>
      <TopBar name="PerfectStudy" />
      <div style={content}>
        <NavBar />
        <div style={main}>
          <FlashCardView flashcards_input={flashcards} />
        </div>
      </div>
    </div>
  );
}