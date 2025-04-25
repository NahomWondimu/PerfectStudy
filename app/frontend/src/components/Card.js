import PropTypes from 'prop-types'
import { colors, borderRadius, boxShadow } from '../theme';

function Card( { name }){

    const style = {
        width: '300px',
        height: '200px',
        backgroundColor: colors.accent,
        color: colors.text,
        border: `2px solid ${colors.primary}`,
        borderRadius,
        boxShadow,
        padding: '20px',
        margin: '20px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.25rem',
        fontWeight: 500,
        textAlign: 'center',
        transition: 'transform 0.3s ease',
      };

    return(
        <div style = {style}>
            {name}
        </div>
    );
}

Card.propTypes = {
    name:PropTypes.string.isRequired
};

export default Card;