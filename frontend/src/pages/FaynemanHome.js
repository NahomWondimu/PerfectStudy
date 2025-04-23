import TopBar from './TopBar.js';
import NavBar from './NavBar.js';

function FaynmenHome(){
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
    
      return (
        <>
          <div style={homepageStyle}>
            <TopBar name="Faynmen Technique" />
            <div style={contentStyle}>
              <div style={sidebarStyle}>
                <NavBar />
              </div>
            </div>
          </div>
        </>
      );

}

export default FaynmenHome;