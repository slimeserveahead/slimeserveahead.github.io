import React, { useEffect } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
    

function Contact() {

    React.useEffect(() => {
        gsap.fromTo('.messenger', 
        {   
            y: -1000,
        },
        {
            duration: 1.5,
            y: 0,
            ease: 'bounce', 
            scrollTrigger : {
                trigger: ".contactSocialContainer",
                start: "bottom bottom"
            }
        })

        gsap.fromTo('.linkedIn', 
        {   
            y: -1000,
        },
        {
            delay: 0.75,
            duration: 1.5,
            y: 0,
            ease: 'bounce',
            scrollTrigger : {
                trigger: ".contactSocialContainer",
                start: "bottom bottom"
            } 
        })

        gsap.fromTo('.viber', 
        {   
            y: -1000,
        },
        {
            delay: 1.5,
            duration: 1.5,
            y: 0,
            ease: 'bounce',
            scrollTrigger : {
                trigger: ".contactSocialContainer",
                start: "bottom bottom"
            } 
        })

        gsap.fromTo('.telegram', 
        {   
            y: -1000,
        },
        {
            delay: 2.5,
            duration: 1.5,
            y: 0,
            ease: 'bounce',
            scrollTrigger : {
                trigger: ".contactSocialContainer",
                start: "bottom bottom"
            } 
        })

        gsap.fromTo('.facebook', 
        {   
            y: -1000,
        },
        {
            delay: 2.5,
            duration: 1.5,
            y: 0,
            ease: 'bounce',
            scrollTrigger : {
                trigger: ".contactSocialContainer",
                start: "bottom bottom"
            } 
        })
    }, [])
    
    return (
        <div className="contact">
            <div className="contactText">G.</div>
            <div className="contactSocialContainer">
                <div className="messenger">M</div>
                <div className="linkedIn">L</div>
                <div className="viber">V</div>
                <div className="telegram">T</div>
                <div className="facebook">F</div>
            </div>
        </div>
    )
}

export default Contact