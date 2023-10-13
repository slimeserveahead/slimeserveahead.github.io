import confetti from 'canvas-confetti';
import React from "react";
import screenshotImg from "../images/screenshot.png"

function FrontendProjects() {

    const [isClicked, setIsClicked] = React.useState(false)
   
    function triggerConfetti() {
        var count = 200;
        var defaults = {
          origin: { y: 0.7 },
          colors: ['#FFC428', '#282828'],
        };
        
        function fire(particleRatio, opts) {
          confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
          });
        }
        
        fire(0.25, {
          spread: 26,
          startVelocity: 55,
        });
        fire(0.2, {
          spread: 60,
        });
        fire(0.35, {
          spread: 100,
          decay: 0.91,
          scalar: 0.8
        });
        fire(0.1, {
          spread: 120,
          startVelocity: 25,
          decay: 0.92,
          scalar: 1.2
        });
        fire(0.1, {
          spread: 120,
          startVelocity: 45,
        });
      };

      function frontendClickHandler() {
        setIsClicked(true)
        triggerConfetti()
        const screenshot1 = document.getElementById('screenshot1');
        screenshot1.classList.remove("screenshotCenter")
        setTimeout(() => {
          const screenshot2 = document.getElementById('screenshot2');
          screenshot2.classList.remove("screenshotCenter")
        }, 200)
        setTimeout(() => {
          const screenshot3 = document.getElementById('screenshot3');
          screenshot3.classList.remove("screenshotCenter")
        }, 400)
        setTimeout(() => {
          const screenshot4 = document.getElementById('screenshot4');
          screenshot4.classList.remove("screenshotCenter")
        }, 600)
        setTimeout(() => {
          const screenshot5 = document.getElementById('screenshot5');
          screenshot5.classList.remove("screenshotCenter")
        }, 800)
        setTimeout(() => {
          const screenshot6 = document.getElementById('screenshot6');
          screenshot6.classList.remove("screenshotCenter")
        }, 1000)
      }

    return (
        <div className="frontEndProjects">
            <div className={`frontEndProjectsText ${isClicked ? `visibilityHidden` : ""}`} onClick={frontendClickHandler}>FRONT</div>
            <div className="screenshotsContainer">
              <div className={`screenshot screenshot1 screenshotCenter`} id="screenshot1"><img src={screenshotImg}></img></div>
              <div className={`screenshot screenshot2 screenshotCenter`} id="screenshot2"><img src={screenshotImg}></img></div>
              <div className={`screenshot screenshot3 screenshotCenter`} id="screenshot3"><img src={screenshotImg}></img></div>
              <div className={`screenshot screenshot4 screenshotCenter`} id="screenshot4"><img src={screenshotImg}></img></div>
              <div className={`screenshot screenshot5 screenshotCenter`} id="screenshot5"><img src={screenshotImg}></img></div>
              <div className={`screenshot screenshot6 screenshotCenter`} id="screenshot6"><img src={screenshotImg}></img></div>
            </div>
        </div>
    )
}

export default FrontendProjects