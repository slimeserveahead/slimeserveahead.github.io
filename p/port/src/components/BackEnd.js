import SkillbarContainer from "./SkillbarContainer";
import React from "react"

function BackEnd() {

    const [isHovered, setIsHovered] = React.useState(false)

    function mouseHover() {
        setIsHovered(true)
    }

    function mouseLeave() {
        setIsHovered(false)
    }

    return ( 
        <div 
            className="skillsContainer rightContainer"
            onMouseEnter={mouseHover}
            onMouseLeave={mouseLeave}
        >
            <h1>B</h1>
            <SkillbarContainer 
                isHovered={isHovered}
                width="55vw"
                label="F"
            />
            <SkillbarContainer 
                width="55vw"
                isHovered={isHovered}
                label="D"
            />
            <SkillbarContainer 
                width="30vw"
                isHovered={isHovered}
                label="P"
            />
            <SkillbarContainer 
                width="59vw"
                isHovered={isHovered}
                label="N"
            />
        </div>
        
    )
}

export default BackEnd;