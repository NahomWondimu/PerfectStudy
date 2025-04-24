import { useState } from "react";
import Card from "../pages/Card";

function FlashCardView( {flashcard_input} ){
    
    const [counter, setCounter] = useState(0);

    const [flip, setFlip] = useState(true);

    let flashcards;
    flashcards = flashcard_input;

    //console.log("Flashcards input", typeof flashcards_input);

    /*if (flashcards_input == undefined) {
        alert("works.");
        return <>
                <div>{null}</div>
            </>
    }*/

    /*let flashcards;
    flashcards = flashcards_input;*/


    /*const flashcards = [
        {
          question: "What is the capital of France?",
          answer: "Paris"
        },
        {
          question: "What is 2 + 2?",
          answer: "4"
        },
        {
          question: "What is the chemical symbol for water?",
          answer: "H₂O"
        },
        {
          question: "Who wrote 'Romeo and Juliet'?",
          answer: "William Shakespeare"
        }
    ]*/
    

    const questions = flashcards.map(card => card.question);
    const answers = flashcards.map(card => card.answer);

    

    const flipCard = () => {
        setFlip(!flip);
    }

    const increment = () => {
        if (counter < flashcards.length - 1) {
          setCounter(counter + 1);
        }
        if(!flip){
            flipCard();
        }
    };
      
    const decrement = () => {
        if (counter > 0) {
          setCounter(counter - 1);
        }
        if(!flip){
            flipCard();
        }
    };

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
                <button onClick={flipCard}>
                    flip
                </button>
                {
                    flip?<Card name={questions[counter]}/>:<Card name={answers[counter]}/>
                }

            </div>

        </>
    );
}

export default FlashCardView;