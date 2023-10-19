import React from "react"
import check from "../images/tick.webp"
import cross from "../images/cross.webp"

function Choices(props) {

    const [choices, setChoices] = React.useState([])
    const [hasChecked, setHasChecked] = React.useState(false)
    const [hasChosen, setHasChosen] = React.useState(false)
    const [isCorrect, setIsCorrect] = React.useState(false)

    React.useEffect(() => {
        if (hasChosen) {
            props.setChoiceCount(prevCount => prevCount + 1)
        }
    }, [hasChosen])

    React.useEffect(() => {
        if (props.isChecking && !hasChecked) {
          checkAnswer();
          setHasChecked(true);
        }
      }, [props.isChecking, hasChecked]);
  
    const choicesWithStatus = props.choices.map(choice => {
        return (
            {
                choice: choice,
                isSelected: false
            }
        )
    })

    React.useState(() => {
        setChoices(choicesWithStatus)
    }, [])
    

    function selectChoice(chosen) {
        if (!props.isChecking) {
            setHasChosen(true)

            setChoices(prevChoices => prevChoices.map(entry => {
                if (entry.choice === chosen) {
                    return ({
                        ...entry,
                        isSelected: true
                    })
                } else {
                    return ({
                        ...entry,
                        isSelected: false
                    })
                }
            }))
        }
    }

    function checkAnswer() {
        choices.map(entry => {
            if (entry.isSelected === true) {
                if (entry.choice === props.correct_answer) {
                    console.log("Correct!")
                    setIsCorrect(true)
                    props.setScore(prevState => prevState + 1)
                } else {
                    console.log("Wrong!")
                }
            }
        })
    }    

    return (
        <div className="choicesContainer">
            <div className="choices">
                {choices.map(entry => {
                    return(
                        <div 
                            className={`choice 
                                ${entry.isSelected ? "selectedChoice" : ""}
                                ${props.isChecking && entry.choice === props.correct_answer ? "correctAnswer" :  ""}
                                ${props.isChecking && entry.isSelected && entry.choice !== props.correct_answer ? "wrongAnswer" :  ""}
                            `} 
                            key={entry.choice}
                            onClick={() => selectChoice(entry.choice)}>
                            {entry.choice}
                        </div>
                    )
                })}
            </div>
            {props.isChecking && <img src={isCorrect ? check : cross} />}
            
        </div>
    )
}

export default Choices