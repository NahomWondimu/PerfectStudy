import { useState } from "react";
import Card from "../pages/Card";

function FlashCardView(){

    const example = ["apple","orange","sulfur","CO2"];

    const [counter, setCounter] = useState(0);

    const increment = () =>{
        setCounter(counter + 1);
    }

    const decrement = () =>{
        setCounter(counter - 1);
    }

    //const [flip, setFlip] = useState(true);

    //const flipCard = () => {
    //    setFlip(!flip);
    //}

    /*
        TO DO:
        -find out how to input and process json data
        conditional render this element in homepage
        -use conditional rendering a usestate hook to file through cards
    
    */

    const viewStyle = {
        width: '500px',
        height: '500px'
    }

    return(
        <>
            <div style = {viewStyle}>
                <button onClick={increment}>  
                    next
                </button>
                <button onClick={decrement}>
                    prev
                </button>
                <Card name={example[counter]}></Card>

            </div>

        </>
    );
}

export default FlashCardView;