import SkillbarContainer from "./SkillbarContainer";
import React from "react"

function FrontEnd() {

    const [isHovered, setIsHovered] = React.useState(false)

    function mouseHover() {
        setIsHovered(true)
    }

    function mouseLeave() {
        setIsHovered(false)
    }

    return ( 
        <div 
            className="skillsContainer leftContainer"
            onMouseEnter={mouseHover}
            onMouseLeave={mouseLeave}
        >
            <h1>F</h1>
            <SkillbarContainer 
                isHovered={isHovered}
                width="61vw"
                label="C"
            />
            <SkillbarContainer 
                width="60vw"
                isHovered={isHovered}
                label="B"
            />
            <SkillbarContainer 
                width="59vw"
                isHovered={isHovered}
                label="R"
            />
            <SkillbarContainer 
                width="15vw"
                isHovered={isHovered}
                label="S"
            />
        </div>
        
    )
}

export default FrontEnd;