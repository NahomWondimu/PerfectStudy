import PropTypes from 'prop-types'

function PageButton(props){

    const buttonStyle = {
        
    };

    return(
        <>
        <div>
        <a href={props.link}>{props.name}</a>
        </div>
        </>
    );
}

PageButton.PropTypes = {
    link: PropTypes.string,
    name: PropTypes.string
}

export default PageButton;