import confetti from 'canvas-confetti';
import React from "react";
import screenshotImg from "../images/screenshot.png"

function BackendProjects () {

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
        const screenshot1 = document.getElementById('backscreenshot1');
        screenshot1.classList.remove("screenshotCenter")
        setTimeout(() => {
          const screenshot2 = document.getElementById('backscreenshot2');
          screenshot2.classList.remove("screenshotCenter")
        }, 200)
        setTimeout(() => {
          const screenshot3 = document.getElementById('backscreenshot3');
          screenshot3.classList.remove("screenshotCenter")
        }, 400)
        setTimeout(() => {
          const screenshot4 = document.getElementById('backscreenshot4');
          screenshot4.classList.remove("screenshotCenter")
        }, 600)
        setTimeout(() => {
          const screenshot5 = document.getElementById('backscreenshot5');
          screenshot5.classList.remove("screenshotCenter")
        }, 800)
        setTimeout(() => {
          const screenshot6 = document.getElementById('backscreenshot6');
          screenshot6.classList.remove("screenshotCenter")
        }, 1000)
      }

    return (
        <div className="frontEndProjects">
            <div className={`frontEndProjectsText ${isClicked ? `visibilityHidden` : ""}`} onClick={frontendClickHandler}>BackEnd</div>
            <div className="screenshotsContainer">
              <div className={`screenshot backscreenshot1 screenshotCenter`} id="backscreenshot1"><img src={screenshotImg}></img></div>
              <div className={`screenshot backscreenshot2 screenshotCenter`} id="backscreenshot2"><img src={screenshotImg}></img></div>
              <div className={`screenshot backscreenshot3 screenshotCenter`} id="backscreenshot3"><img src={screenshotImg}></img></div>
              <div className={`screenshot backscreenshot4 screenshotCenter`} id="backscreenshot4"><img src={screenshotImg}></img></div>
              <div className={`screenshot backscreenshot5 screenshotCenter`} id="backscreenshot5"><img src={screenshotImg}></img></div>
              <div className={`screenshot backscreenshot6 screenshotCenter`} id="backscreenshot6"><img src={screenshotImg}></img></div>
            </div>
        </div>
    )
}

export default BackendProjects