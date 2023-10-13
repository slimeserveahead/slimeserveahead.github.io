import AboutMeContainer from "./AboutMeContainer";

import User from "../images/R (1).png"

function AboutMe() {
    return (
        <div className="aboutMe">
            <div className="userImageContainer">
                <img className="userImage" src={User}></img>
            </div>
            <AboutMeContainer />
        </div>
    )
}

export default AboutMe;