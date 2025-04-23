import TopBar from './TopBar.js';
import NavBar from './NavBar.js';

function GenCards(){

    const homepageStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    };

    return(
        <>
        <div style = {homepageStyle}>
          <TopBar name='Generate FlashCards'/>
          <NavBar/>
        </div>
        </>
    );
}

export default GenCards;