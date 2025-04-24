import PropTypes from 'prop-types'

function Card(props){

    const flashcardStyle = {
        width: "300px",
        height: "200px",
        backgroundColor: "#ffffff",
        color: "#333",
        border: "2px solid #4caf50",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        margin: "20px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.25rem",
        fontWeight: "500",
        textAlign: "center",
        transition: "transform 0.4s ease",
      };

    return(
        <>
        <div style = {flashcardStyle}>
            {props.name}
        </div>
        </>
    );
}

Card.propTypes = {
    name:PropTypes.string
}

export default Card;