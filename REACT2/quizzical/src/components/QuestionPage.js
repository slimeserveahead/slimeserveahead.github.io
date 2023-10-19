import React from "react"
import Confetti from 'react-confetti'


import Question from "./Question"

import "../styles/QuestionPage.css"

function QuestionPage(props) {

    const [isChecking, setIsChecking] = React.useState(false)
    const [score, setScore] = React.useState(0)
    const [choiceCount, setChoiceCount] = React.useState(0)
    const [isFilled, setIsFilled] = React.useState(false)
    const [isPerfect, setIsPerfect] = React.useState(false)

    function checkAnswer() {
        setIsChecking(true)
    }

    React.useEffect(() => {
        if(props.questions.length === choiceCount) {
            setIsFilled(true)
            console.log("Is Filled")
        }
    }, [choiceCount])

    React.useEffect(() => {
        if(score === props.questions.length) {
            setIsPerfect(true)
        }
    })

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    return (
        <div className="questions">
            {props.questions.map(q => {

                const choices = shuffleArray([...q.incorrect_answers, q.correct_answer])
                
                return(
                    <div key={q.question}>
                        {isPerfect && <Confetti width={	window.innerWidth || 300} />}
                        <Question
                            setChoiceCount={setChoiceCount}
                            setScore={setScore}
                            score={score}
                            isChecking={isChecking}
                            question={q.question}
                            choices={choices}
                            correct_answer={q.correct_answer}
                        />
                    </div>
                )
            })}
            {isChecking ? <div className="scores">{isPerfect ? "Excellent!" : `You scored ${score} / ${props.questions.length}`}</div> : ""}
            <div onClick={isChecking ? props.reset : isFilled ? checkAnswer : null} className={`checkButton ${isFilled ? "" : "disabledButton"}`}>
                {isChecking ? "Try Again" : "Check Answer"}
            </div>
        </div>
    )
}

export default QuestionPage