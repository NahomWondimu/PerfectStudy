import PropTypes from 'prop-types';
import { colors } from '../theme';

const headerStyle = {
  backgroundColor: colors.primary, // Value of #2563eb
  color: colors.buttonText,
  padding: '1rem 2rem',
  fontSize: '1.5rem',
  fontWeight: 600,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

function TopBar({ name }) {
  return <header style={headerStyle}>{name}</header>;
}

TopBar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TopBar;