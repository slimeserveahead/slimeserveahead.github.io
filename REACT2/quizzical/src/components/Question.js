import React from "react"
import Choices from "./Choices"

function Question(props) {
    
    

    return (
        <div className="questionsContainer">
            <div className="question">{props.question}
            </div>
            <div>
                <Choices 
                    setChoiceCount={props.setChoiceCount}
                    setScore={props.setScore}
                    addScore={props.addScore}
                    isChecking={props.isChecking}
                    choices={props.choices}
                    correct_answer={props.correct_answer}
                />
            </div>
        </div>
    )
}

export default Question