import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

function PageButton(props){
    const nav = useNavigate();

    const handleClick = () => {
        nav(props.link);
    }

    const buttonStyle = {
        backgroundColor: 'green',
        color: 'black',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    };

    return(
        <>
        <button style = {buttonStyle} onClick={handleClick}>
            {props.name}
        </button>
        </>
    );
}

PageButton.propTypes = {
    link: PropTypes.string,
    name: PropTypes.string
}

export default PageButton;