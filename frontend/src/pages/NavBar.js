import { useEffect, useState } from 'react';

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
        transition: 'width 0s ease'
    };

    return(
        <>
        <div style = {box2Style}>
            /*
            add page buttons here
            */
        </div>
        </>
    );
}

export default NavBar;