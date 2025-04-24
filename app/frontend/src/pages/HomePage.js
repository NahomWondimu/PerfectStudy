import TopBar from './TopBar.js';
import NavBar from './NavBar.js';
import FlashCardView from './FlashCardView.js'

function HomePage(){
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      };
    
      return (
        <>
          <div style={homepageStyle}>
            <TopBar name="PerfectStudy" />
            <div style={contentStyle}>
              <div style={sidebarStyle}>
                <NavBar />
              </div>
              <div style={mainContentStyle}>
                <FlashCardView />
              </div>
            </div>
          </div>
        </>
      );
}

export default HomePage;