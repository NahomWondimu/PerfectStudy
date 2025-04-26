import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { colors } from '../theme';

const topBarStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: colors.primary,
  color: colors.buttonText,
  padding: '1rem 2rem',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const navContainerStyle = {
  display: 'flex',
  gap: '1rem',
};

const linkStyle = {
  color: colors.buttonText,
  padding: '0.5rem 1rem',
  borderRadius: '0.5rem',
  textDecoration: 'none',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background-color 0.2s',
};

function TopBar({ name }) {
  const navigate = useNavigate();
  const items = [
    { to: '/', label: 'Home' },
    { to: '/gen', label: 'Generate Cards' },
    { to: '/FeynHome', label: 'Feynman Technique' },
  ];

  return (
    <header style={topBarStyle}>
      <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>{name}</div>
      <nav style={navContainerStyle}>
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
    </header>
  );
}

TopBar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TopBar;

// Note: You can remove NavBar.jsx since navigation is now part of TopBar
