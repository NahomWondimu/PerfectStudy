import TopBar from './TopBar.js';
import NavBar from './NavBar.js';

function HomePage(){

    const homepageStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    };

    return(
        <>
        <div style = {homepageStyle}>
          <TopBar/>
          <NavBar/>
        </div>
        </>
    );
}

export default HomePage;