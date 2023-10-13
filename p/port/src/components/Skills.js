
import React from "react"

import FrontEnd from "./FrontEnd"

import leftArrow from "../images/left_arrow.png"
import rightArrow from "../images/right_arrow.png"
import BackEnd from "./BackEnd";
import Languages from "./Languages";

function Skills() {
    const [isLeftHovered, setIsLeftHovered] = React.useState(false);
    const [isRightHovered, setIsRightHovered] = React.useState(false);
    const [category, setCategory] = React.useState(0);
    const [isLanguages, setIsLanguages] = React.useState(true)
    const [isBackend, setIsBackend] = React.useState(false)
    const [isFrontend, setIsFrontend] = React.useState(false)
    const [isMoving, setIsMoving] = React.useState(false)

    React.useEffect(() => {
        if (category === 0) {
            setIsLanguages(true)
            setIsBackend(false)
            setIsFrontend(false)
        } else if (category === 1) {
            setIsLanguages(false)
            setIsFrontend(true)
            setIsBackend(false)
        } else {
            setIsLanguages(false)
            setIsFrontend(false)
            setIsBackend(true)
        }
    }, [category])

    function moveUp() {
        setIsMoving(true)

        if (!isMoving) {
            if (category === 2) {
                setCategory(0)
            } else {
                setCategory(prevCount => prevCount + 1)
            }
            const middleContainer = document.querySelector('.middleContainer') 
            const rightContainer = document.querySelector(".rightContainer")
            const leftContainer = document.querySelector(".leftContainer")
            leftContainer.classList.add("visibilityHidden")
            rightContainer.classList.remove("visibilityHidden")
    
            setTimeout(() => {
                middleContainer.classList.add("leftContainer")
                middleContainer.classList.remove("middleContainer")
                leftContainer.classList.add('rightContainer')
                leftContainer.classList.remove("leftContainer")
                rightContainer.classList.add("middleContainer")
                rightContainer.classList.remove("rightContainer")
            }, 50)

            setTimeout(() => {
                setIsMoving(false)
            }, 500)
        }
    }

    function moveDown() {
        setIsMoving(true)
        
        if (!isMoving) {
            if (category === 0) {
                setCategory(2)
            } else {
                setCategory(prevCount => prevCount - 1)
            }
            const middleContainer = document.querySelector('.middleContainer') 
            const rightContainer = document.querySelector(".rightContainer")
            const leftContainer = document.querySelector(".leftContainer")
            rightContainer.classList.add("visibilityHidden")
            leftContainer.classList.remove("visibilityHidden")
            setTimeout(() => {
                middleContainer.classList.add("rightContainer")
                middleContainer.classList.remove("middleContainer")
                leftContainer.classList.add('middleContainer')
                leftContainer.classList.remove("leftContainer")
                rightContainer.classList.add("leftContainer")
                rightContainer.classList.remove("rightContainer")
            }, 50)

            setTimeout(() => {
                setIsMoving(false)
            }, 500)
        }
    }

    function hoveringRight() {
        setIsRightHovered(true)
    }

    function leavingRight() {
        setIsRightHovered(false)
    }

    function hoveringLeft() {
        setIsLeftHovered(true)
    }

    function leavingLeft() {
        setIsLeftHovered(false)
    }

    return (
        <div className="skillsSection">
            <div className="skills">
                <Languages />
                <BackEnd />
                <FrontEnd />
            </div>
            <div className="arrows">
                <div 
                    className="leftArrow"
                    onClick={moveDown}
                    onMouseEnter={hoveringLeft}
                    onMouseLeave={leavingLeft}
                    style={{transform : isLeftHovered ? `translateX(0)` : ""}}
                >
                    <div className="arrowText">{isLanguages ? "F" : isBackend ? "B" :  "L"}</div>
                    <img src={leftArrow}></img>
                </div>
                <div 
                    className="rightArrow"
                    onClick={moveUp}
                    onMouseEnter={hoveringRight}
                    onMouseLeave={leavingRight}
                    style={{transform : isRightHovered ? `translateX(0)` : ""}}
                >
                    <img src={rightArrow}></img>
                    <div className="arrowText">{isLanguages ? "B" : isFrontend ? "F" : "L"}</div>
                </div>
            </div>
        </div>
    )
}

export default Skills