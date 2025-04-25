import { useNavigate } from 'react-router-dom'
import { colors } from '../theme';

const navStyle = {
    width: '200px',
    backgroundColor: colors.navBg,
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
};

const linkStyle = {
    color: colors.buttonText,
    padding: '0.75rem 1rem',
    margin: '0.25rem 0',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background-color 0.2s',
};


function NavBar(){
    const navigate = useNavigate();
  const items = [
    { to: '/', label: 'Home' },
    { to: '/gen', label: 'Generate Cards' },
    { to: '/FeynHome', label: 'Feynman Technique' },
  ];

  return (
    <nav style={navStyle}>
      {items.map(item => (
        <div
          key={item.to}
          style={linkStyle}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = colors.buttonBg}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          onClick={() => navigate(item.to)}
        >
          {item.label}
        </div>
      ))}
    </nav>
  );
}
    /** This is the trash can. If you made this = ur trash :)
    const [height, setHeight] = useState(window.innerHeight);
    
    useEffect(() => {
        const handleResize = () => setHeight(window.innerHeight);
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
    }, []);
      
    const box2Style = {
        width: '200px',   // CSS values
        height: height * .855,
        backgroundColor: '#284b63',
        transition: 'width 0s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    };

    return(
        <>
        <div style = {box2Style}>
            <PageButton link='/' name='Home'></PageButton>
            <PageButton link='/gen' name='Generate Cards'></PageButton>
            <PageButton link='/FeynHome' name='Feynmen Technique'></PageButton>
        </div>
        </>
    );
}
*/

export default NavBar;