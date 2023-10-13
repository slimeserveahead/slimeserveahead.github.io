import gsap from "gsap";
import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

import FrontendProjects from "./FrontendProjects";
import BackendProjects from "./BackendProjects";

function Projects(props) {

    

    return (
        <div className="projects">
            <FrontendProjects />
            <BackendProjects />
        </div>
    )
}

export default Projects;