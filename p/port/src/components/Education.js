import React from "react"

import certsImg from "../images/certs.png"
import certsActiveImg from "../images/certs_active.png"
import collegeImg from "../images/college.png"
import collegeActiveImg from "../images/college_active.png"
import highschoolImg from "../images/highschool.png"
import highschoolActiveImg from "../images/highschool_active.png"
import postgradImg from "../images/postgrad.png"
import postgradActiveImg from "../images/postgrad_active.png"

function Education(props) {

    const [highschool, setHighschool] = React.useState(true)
    const [college, setCollege] = React.useState(false)
    const [postgrad, setPostgrad] = React.useState(false)
    const [certs, setCerts] = React.useState(false)

    function highschoolClickHandler() {
        setHighschool(true)
        setCollege(false)
        setPostgrad(false)
        setCerts(false)
    }

    function collegeClickHandler() {
        setHighschool(false)
        setCollege(true)
        setPostgrad(false)
        setCerts(false)
    }

    function postgradClickHandler() {
        setHighschool(false)
        setCollege(false)
        setPostgrad(true)
        setCerts(false)
    }

    function certsClickHandler() {
        setHighschool(false)
        setCollege(false)
        setPostgrad(false)
        setCerts(true)
    }

    return (
        <div className={`education ${props.education ? `educationShow` : ""}`}>
            <div className="educationSidebar">
                <div onClick={highschoolClickHandler} className={`educationButtons ${highschool ? `educationButtonActive` : ""}`}>
                    <img src={highschool ? highschoolActiveImg : highschoolImg}></img>
                </div>
                <div onClick={collegeClickHandler} className={`educationButtons ${college ? `educationButtonActive` : ""}`}>
                    <img src={college ? collegeActiveImg : collegeImg}></img>
                </div>
                <div onClick={postgradClickHandler} className={`educationButtons ${postgrad ? `educationButtonActive` : ""}`}>
                    <img src={postgrad ? postgradActiveImg : postgradImg}></img>
                </div>
                <div onClick={certsClickHandler} className={`educationButtons ${certs ? `educationButtonActive` : ""}`}>
                    <img src={certs ? certsActiveImg : certsImg}></img>
                </div>
            </div>
        </div>
    )
}

export default Education;