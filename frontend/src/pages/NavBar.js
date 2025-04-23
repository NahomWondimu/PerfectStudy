import { useEffect, useState } from 'react';
import PageButton from './PageButton';

function NavBar(){

    const [height, setHeight] = useState(window.innerHeight);
    
    useEffect(() => {
        const handleResize = () => setHeight(window.innerHeight);
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
    }, []);
      
    const box2Style = {
        width: '200px',   // CSS values
        height: height * .855,
        backgroundColor: 'rgba(112, 180, 106, 0.8)',
        transition: 'width 0s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    };

    return(
        <>
        <div style = {box2Style}>
            <PageButton link='/gen' name='gen'></PageButton>
        </div>
        </>
    );
}

export default NavBar;