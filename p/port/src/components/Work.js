import React from "react"

import engineer from "../images/engineer.png"
import engineerActive from "../images/engineer_active.png"
import programmer from "../images/programmer.png"
import programmerActive from "../images/programmer_active.png"

function Work(props) {
    
    const [work1, setWork1] = React.useState(true)
    const [work2, setWork2] = React.useState(false)
    const [work3, setWork3] = React.useState(false)
    const [work4, setWork4] = React.useState(false)
    const [work5, setWork5] = React.useState(false)

    function work1ClickHandler() {
        setWork1(true)
        setWork2(false)
        setWork3(false)
        setWork4(false)
        setWork5(false)
    }

    function work2ClickHandler() {
        setWork1(false)
        setWork2(true)
        setWork3(false)
        setWork4(false)
        setWork5(false)
    }

    function work3ClickHandler() {
        setWork1(false)
        setWork2(false)
        setWork3(true)
        setWork4(false)
        setWork5(false)
    }

    function work4ClickHandler() {
        setWork1(false)
        setWork2(false)
        setWork3(false)
        setWork4(true)
        setWork5(false)
    }

    function work5ClickHandler() {
        setWork1(false)
        setWork2(false)
        setWork3(false)
        setWork4(false)
        setWork5(true)
    }

    return (
        <div className={`work ${props.work ? `workShow` : ""}`}>
            <div className="workContents"></div>
            <div className="workSidebar">
                <div onClick={work1ClickHandler} className={`workButtons ${work1 ? "workButtonActive" : ""}`}>
                    <img src={work1 ? engineerActive : engineer}></img>
                </div>
                <div onClick={work2ClickHandler} className={`workButtons ${work2 ? "workButtonActive" : ""}`}>
                    <img src={work2 ? engineerActive : engineer}></img>
                </div>
                <div onClick={work3ClickHandler} className={`workButtons ${work3 ? "workButtonActive" : ""}`}>
                    <img src={work3 ? engineerActive : engineer}></img>
                </div>
                <div onClick={work4ClickHandler} className={`workButtons ${work4 ? "workButtonActive" : ""}`}>
                    <img src={work4 ? engineerActive : engineer}></img>
                </div>
                <div onClick={work5ClickHandler} className={`workButtons ${work5 ? "workButtonActive" : ""}`}>
                    <img src={work5 ? programmerActive : programmer}></img>
                </div>
            </div>
        </div>
    )
}

export default Work;