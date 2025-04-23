import { useEffect, useState } from 'react';

function TopBar(){
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const boxStyle = {
      width: width,   // CSS values
      height: '100px',
      backgroundColor: 'rgb(112, 180, 106)',
      transition: 'width 0s ease'
    };

    const headerStyle ={
        
    };
  
    return (<div style={boxStyle}>
        <h1 style={headerStyle}>
            PerfectStudy
        </h1>
        </div>);
}

export default TopBar;