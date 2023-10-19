import React from 'react'

import bottom from "./images/bottom.png"
import top from "./images/top.png"

import QuestionPage from "./components/QuestionPage";
import StartPage from './components/StartPage';

import './App.css';

function App() {

  var windowHeight = window.innerHeight;

  const [questions, setQuestions] = React.useState([])
  const [isNotFound, setIsNotFound] = React.useState(false)
  const [isAnswering, setIsAnswering] = React.useState(false)

  function reset() {
    setIsAnswering(false)
  }

  function changeApi(api) {
    fetch(api)
      .then(res => res.json())
      .then(data => {
        if (data.response_code !== 0) {
          setIsNotFound(true)
        } else {
          const decodedResults = data.results.map(question => {
            return {
              ...question,
              question: decodeHtmlEntities(question.question),
              correct_answer: decodeHtmlEntities(question.correct_answer),
              incorrect_answers: decodeAnswers(question.incorrect_answers)
            };
          });

          setQuestions(decodedResults);
          setIsNotFound(false)
          setIsAnswering(true)
        }
      })
    console.log("Fetching...")
  }

  function decodeAnswers(answers) {
    return answers.map(answer => decodeHtmlEntities(answer));
  }

  function decodeHtmlEntities(text) {
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(text, "text/html").body.textContent;
    return decodedString;
  }
  
  return (
    <div className="app" >
      <div className="backgroundImages">
        <img className="top" src={top} />
        <img className="bottom" src={bottom} />
      </div>
      {!isAnswering ? 
      <StartPage 
        changeApi={changeApi}
        isNotFound={isNotFound}
      />
      :
      <QuestionPage 
        reset={reset}
        questions={questions}
      />
      }
    </div>
  );
}

export default App;
