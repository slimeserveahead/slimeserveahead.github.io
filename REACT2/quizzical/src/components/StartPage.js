import React from "react"

import Selection from "./Selection"

import "../styles/StartPage.css"

function StartPage(props) {

    const [categories, setCategories] = React.useState([])
    const [difficulty, setDifficulty] = React.useState(0)
    const [category, setCategory] = React.useState(0)
    const [type, setType] = React.useState(0)


    function checkValue(label, e) {
        if (label === "categories") {
            setCategory(e.target.value)
        } else if (label === "difficulty") {
            setDifficulty(e.target.value)
        } else if (label === "types"){
            setType(e.target.value)
        }
    }

    function getAPI() {
        props.changeApi(`https://opentdb.com/api.php?amount=5${category == 0 ? "" : `&category=${category}`}${difficulty == 0 ? "" : `&difficulty=${difficulty}`}${type == 0 ? "" : `&type=${type}`}`)
    }

    const difficultySelection = [
        {
            id: 0,
            name: "Any Difficulty"
        },
        {
            id: "easy",
            name: "Easy"
        },
        {
            id: "medium",
            name: "Medium"
        }, 
        {
            id: "hard",
            name: "Hard"
        }
    ]

    const types = [
        {
            id: 0,
            name: "Any Type"
        },
        {
            id: "multiple",
            name: "Multiple Choice"
        },
        {
            id: "boolean",
            name: "True / False"
        }
    ]

    React.useEffect(() => {
        fetch("https://opentdb.com/api_category.php/")
            .then(res => res.json())
            .then(data => {
                const categoryWithRandom = [
                    {
                        id: 0,
                        name: "Any Category"
                    },
                    ...data.trivia_categories
                ]

                setCategories(categoryWithRandom)
            })
            .catch(error => console.error('Error fetching data:', error))
    }, [])

    return (
        <div className="startPage">
            <div className="title">QUIZZICAL</div>
            <div className="subtitle">Answer the questions and test your knowledge!</div>
            {props.isNotFound && <div className="title">Oops! We couldn't find any questions with these options!</div>}
            <Selection 
                key="1"
                label="Category:"
                values={categories}
                for="categories"
                checkValue={checkValue}
            />
            <Selection 
                key="2"
                label="Difficulty:"
                values={difficultySelection}
                for="difficulty"
                checkValue={checkValue}
            />
            <Selection 
                key="3"
                label="Type of questions:"
                values={types}
                for="types"
                checkValue={checkValue}
            />
            <button onClick={getAPI} >Start Quiz</button>
        </div>
    )
}

export default StartPage