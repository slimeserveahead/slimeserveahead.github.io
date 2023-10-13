import React from "react"

function SkillbarContainer(props) {  
    return (
        <div className="skillbarContainer">
            <div>{props.label}</div>
            <div 
                className="skillBar"
            >
                <div style={{ width: props.isHovered ? `${props.width}` : '0px' }} className="skillProgress"></div>
            </div>
        </div>
    )
}

export default SkillbarContainer