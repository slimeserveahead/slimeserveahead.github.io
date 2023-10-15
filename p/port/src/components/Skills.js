
import React from "react"

import FrontEnd from "./FrontEnd"

import leftArrow from "../images/left_arrow.png"
import rightArrow from "../images/right_arrow.png"
import BackEnd from "./BackEnd";
import Languages from "./Languages";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
    const [isLeftHovered, setIsLeftHovered] = React.useState(false);
    const [isRightHovered, setIsRightHovered] = React.useState(false);
    const [isMoving, setIsMoving] = React.useState(false)

    function moveRight() {
        setIsMoving(true)

        if (!isMoving) {
            
            const middleContainer = document.querySelector('.middleContainer') 
            const rightContainer = document.querySelector(".rightContainer")
            const leftContainer = document.querySelector(".leftContainer")
            leftContainer.classList.add("visibilityHidden")
            rightContainer.classList.remove("visibilityHidden")

            const arrowTextTop = document.querySelector(".arrowTextTop")
            const arrowTextMid = document.querySelector(".arrowTextMid")
            const arrowTextBot = document.querySelector(".arrowTextBot")

            const arrowTextLeftTop = document.querySelector(".arrowTextLeftTop")
            const arrowTextLeftMid = document.querySelector(".arrowTextLeftMid")
            const arrowTextLeftBot = document.querySelector(".arrowTextLeftBot")

            setTimeout(() => {
                middleContainer.classList.add("leftContainer")
                middleContainer.classList.remove("middleContainer")
                leftContainer.classList.add('rightContainer')
                leftContainer.classList.remove("leftContainer")
                rightContainer.classList.add("middleContainer")
                rightContainer.classList.remove("rightContainer")

                arrowTextMid.classList.add("arrowTextTop")
                arrowTextMid.classList.remove("arrowTextMid")
                arrowTextTop.classList.add("arrowTextBot")
                arrowTextTop.classList.remove("arrowTextTop")
                arrowTextBot.classList.add("arrowTextMid")
                arrowTextBot.classList.remove("arrowTextBot")

                arrowTextLeftMid.classList.add("arrowTextLeftBot")
                arrowTextLeftMid.classList.remove("arrowTextLeftMid")
                arrowTextLeftTop.classList.add("arrowTextLeftMid")
                arrowTextLeftTop.classList.remove("arrowTextLeftTop")
                arrowTextLeftBot.classList.add("arrowTextLeftTop")
                arrowTextLeftBot.classList.remove("arrowTextLeftBot")
            }, 50)

            setTimeout(() => {
                setIsMoving(false)
            }, 500)
        }
    }

    function moveLeft() {
        setIsMoving(true)
        
        if (!isMoving) {
            
            const middleContainer = document.querySelector('.middleContainer') 
            const rightContainer = document.querySelector(".rightContainer")
            const leftContainer = document.querySelector(".leftContainer")
            rightContainer.classList.add("visibilityHidden")
            leftContainer.classList.remove("visibilityHidden")


            const arrowTextTop = document.querySelector(".arrowTextTop")
            const arrowTextMid = document.querySelector(".arrowTextMid")
            const arrowTextBot = document.querySelector(".arrowTextBot")

            const arrowTextLeftTop = document.querySelector(".arrowTextLeftTop")
            const arrowTextLeftMid = document.querySelector(".arrowTextLeftMid")
            const arrowTextLeftBot = document.querySelector(".arrowTextLeftBot")

            setTimeout(() => {
                middleContainer.classList.add("rightContainer")
                middleContainer.classList.remove("middleContainer")
                leftContainer.classList.add('middleContainer')
                leftContainer.classList.remove("leftContainer")
                rightContainer.classList.add("leftContainer")
                rightContainer.classList.remove("rightContainer")

                arrowTextLeftMid.classList.add("arrowTextLeftTop")
                arrowTextLeftMid.classList.remove("arrowTextLeftMid")
                arrowTextLeftTop.classList.add("arrowTextLeftBot")
                arrowTextLeftTop.classList.remove("arrowTextLeftTop")
                arrowTextLeftBot.classList.add("arrowTextLeftMid")
                arrowTextLeftBot.classList.remove("arrowTextLeftBot")

                arrowTextMid.classList.add("arrowTextBot")
                arrowTextMid.classList.remove("arrowTextMid")
                arrowTextTop.classList.add("arrowTextMid")
                arrowTextTop.classList.remove("arrowTextTop")
                arrowTextBot.classList.add("arrowTextTop")
                arrowTextBot.classList.remove("arrowTextBot")
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
        <div className="skillsSection" id="skillsSection">
            <div className="skills">
                <Languages />
                <BackEnd />
                <FrontEnd />
            </div>
            <div className="arrows">
                <div 
                    className="leftArrow"
                    onClick={moveLeft}
                    onMouseEnter={hoveringLeft}
                    onMouseLeave={leavingLeft}
                    style={{transform : isLeftHovered ? `translateX(0)` : ""}}
                >
                    <div className="arrowText">
                        <div className="arrowTextContent arrowTextLeftTop">Languages</div>
                        <div className="arrowTextContent arrowTextLeftMid">Frontend</div>
                        <div className="arrowTextContent arrowTextLeftBot">Backend</div>
                    </div>
                    <img src={leftArrow}></img>
                </div>
                <div 
                    className="rightArrow"
                    onClick={moveRight}
                    onMouseEnter={hoveringRight}
                    onMouseLeave={leavingRight}
                    style={{transform : isRightHovered ? `translateX(0)` : ""}}
                >
                    <img src={rightArrow}></img>
                    <div className="arrowText">
                        <div className="arrowTextContent arrowTextTop">Languages</div>
                        <div className="arrowTextContent arrowTextMid">Backend</div>
                        <div className="arrowTextContent arrowTextBot">Frontend</div>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default Skills