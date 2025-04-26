import { useState } from "react";
import PropTypes from 'prop-types'

function TextBoxInput(props){
    const [textInput, setTextInput] = useState('Enter Explanation here');

    const submit = () => {
    }

    const promptStyle = {

    };

    return(
        <>
            <label style={promptStyle}>
                {props.prompt}
            </label>
            <textarea value={textInput} onChange={(e) => setTextInput(e.target.value)}>
            </textarea>
            <button onClick={submit}>
                submit
            </button>
        </>
    );
}

TextBoxInput.prototype = {
    prompt:PropTypes.string
}

export default TextBoxInput;