import SkillbarContainer from "./SkillbarContainer";
import React from "react"

function Languages() {

    const [isHovered, setIsHovered] = React.useState(false)

    function mouseHover() {
        setIsHovered(true)
    }

    function mouseLeave() {
        setIsHovered(false)
    }

    return ( 
        <div 
            className="skillsContainer middleContainer"
            onMouseEnter={mouseHover}
            onMouseLeave={mouseLeave}
        >
            <h1>L</h1>
            <SkillbarContainer 
                isHovered={isHovered}
                width="40vw"
                label="C"
            />
            <SkillbarContainer 
                width="55vw"
                isHovered={isHovered}
                label="P"
            />
            <SkillbarContainer 
                width="59vw"
                isHovered={isHovered}
                label="JS"
            />
        </div>
        
    )
}

export default Languages;