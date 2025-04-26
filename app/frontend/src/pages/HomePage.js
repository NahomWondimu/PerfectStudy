import TopBar from '../components/TopBar';
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
  //Center h3 tags, make it look good
  return (
    <div style={layout}>
      <TopBar name="PerfectStudy" />
      <div style={content}>
        <div style={main}>
          <FlashCardView flashcards_input={flashcards} />
          <h1>Study better with PerfectStudy</h1>

          <h3>Generate flashcards with your own PDFs and Presentations</h3>
          <h3>Practice topics with the Feynman Technique</h3>

          <h5>Made by Alex Kim, Ayob Ouardi, Nahom Wondimu, Raunak Maheshwari, and Sakib Niaz</h5>

        </div>
       
      </div>
    </div>
  );
}