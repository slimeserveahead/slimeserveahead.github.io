import React from "react"
import Education from "./Education"
import Work from "./Work"
import AboutMeDescription from "./AboutMeDescription"

function AboutMeContainer() { 
    const [aboutMe, setAboutMe] = React.useState(true)
    const [work, setWork] = React.useState(false)
    const [education, setEducation] = React.useState(false)

    function experienceClickHandler() {
        setAboutMe(false)
        setWork(true)
        setEducation(false)
    }

    function academeClickHandler() {
        setAboutMe(false)
        setWork(false)
        setEducation(true)
    }

    function aboutMeClickHandler() {
        setAboutMe(true)
        setWork(false)
        setEducation(false)
    }

    return (
        <div className="aboutMeContainer">
            <div className="aboutMeButtonsContainer">
                <div onClick={academeClickHandler} className={`aboutMeButton ${education ? `activeAboutMeButton` : ""}`}>E</div>
                <div onClick={aboutMeClickHandler} className={`aboutMeButton ${aboutMe ? `activeAboutMeButton` : ""}`}>A</div>
                <div onClick={experienceClickHandler} className={`aboutMeButton ${work ? `activeAboutMeButton` : ""}`}>W</div>
            </div>
            <Education 
                education={education}
            />
            <AboutMeDescription 
                aboutMe={aboutMe}
            />
            <Work 
                work={work}
            />
        </div>
    )
}

export default AboutMeContainer