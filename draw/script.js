const movingImages = document.querySelector(".movingWeb")
const movingImagesMobile = document.querySelector(".movingMobile")

setInterval(() => {
    movingImagesMobile.classList.toggle("movedMobile")
}, 1000)

setInterval(() => {
    movingImages.classList.toggle("moved")
}, 1000)

//------------------------------------------- HIDE CODES BELOW IN SERVER --------------------------------------------//

let names;
fetch('https://raw.githubusercontent.com/slimeserveahead/slimeserveahead.github.io/main/draw/users.json')
.then(response => {
    if (!response.ok) {
    throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    names = data
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});

let picking = false;
let name = document.getElementById("userNames");
let namesContainer = document.querySelectorAll(".namesContainer")
let intervalId;
let pickingInterval = 50;
let hours = 0;
let minutes = 0;
let seconds = 0;
let timeData = null;
let leftHours = 99;
let leftMinutes = 99;
let leftSeconds = 99;
let remainingTime;
let duration = 10;
let ran = false;

function addGlow() {
    const userNames = document.getElementById("userNames")
    userNames.classList.add("glowingWhite")
}

function getRandomName() {
    clearInterval(intervalId); 
    let duration = 5000; 
    picking = true;

    intervalId = setInterval(() => {
        let randomName = names.names[Math.floor(Math.random() * names.names.length)];
        let randomName2 = names.names[Math.floor(Math.random() * names.names.length)];
        let randomName3 = names.names[Math.floor(Math.random() * names.names.length)];
        let randomName4 = names.names[Math.floor(Math.random() * names.names.length)];
        let randomName5 = names.names[Math.floor(Math.random() * names.names.length)];
        name.innerText = randomName
        namesContainer[0].innerText = randomName2;
        namesContainer[1].innerText = randomName3;
        namesContainer[2].innerText = randomName4;            
        namesContainer[3].innerText = randomName5;
    }, 50); 

    setTimeout(() => {
        clearInterval(intervalId);
        name.innerText = `${names.names[0]}`;
        picking = false;
        if (!ran) {
            addGlow()
            ran = true;
            startConfetti();
            namesContainer[0].innerText = names.names[1];
            namesContainer[1].innerText = names.names[2];
            namesContainer[2].innerText = names.names[3];
            namesContainer[3].innerText = names.names[4];
        }
        
    }, duration);
}

function updateTime() {
if (timeData) {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
            if (hours >= 24) {
                hours = 0;
            }
        }
    }
    if (remainingTime === 0) {
        getRandomName()
    } else if (remainingTime > 86400 - duration){
        getRandomName()
    } else if (remainingTime < 86400 - duration && remainingTime > 72000 && picking === false) {
        if (!ran) {
            addGlow()
            name.innerText = `${names.names[0]}`
            namesContainer[0].innerText = names.names[1];
            namesContainer[1].innerText = names.names[2];
            namesContainer[2].innerText = names.names[3];
            namesContainer[3].innerText = names.names[4];
            ran = true;
            startConfetti();
        }
    } else if (remainingTime < 72000 && picking === false) {
        let formattedHours;
        if (leftHours < 10) {
            formattedHours = `0${leftHours}`
        } else {
            formattedHours = leftHours
        }

        let formattedMinutes; 
        if (leftMinutes < 10) {
            formattedMinutes = `0${leftMinutes}`
        } else {
            formattedMinutes = leftMinutes
        }

        let formattedSeconds;
        if (leftSeconds < 10) {
            formattedSeconds = `0${leftSeconds}`
        } else {
            formattedSeconds = leftSeconds
        }
        name.innerText = `Next draw: ${formattedHours}:${formattedMinutes}:${formattedSeconds}`
        namesContainer[0].innerText = "";
        namesContainer[1].innerText = "";
        namesContainer[2].innerText = "";
        namesContainer[3].innerText = "";
    }
    calculateTimeRemaining();
} else {
    fetch('https://worldtimeapi.org/api/timezone/Asia/Manila')
    .then(response => response.json())
    .then(data => {
        timeData = "Fetched";
        const utcDatetimeString = data.utc_datetime;
        const utcDate = new Date(utcDatetimeString);
        utcDate.setUTCHours(utcDate.getUTCHours() + 8);

        hours = utcDate.getUTCHours();
        minutes = utcDate.getUTCMinutes();
        seconds = utcDate.getUTCSeconds();
    })
    .catch(error => {
        console.error('Error fetching time from the API:', error);
    });
}
}

function calculateTimeRemaining() {
const currentTime = hours * 3600 + minutes * 60 + seconds;
const targetTime = 20 * 3600; 

let timeDifference = targetTime - currentTime;
if (timeDifference < 0) {
    timeDifference += 24 * 3600; 
}
remainingTime = timeDifference;
leftHours = Math.floor(timeDifference / 3600);
leftMinutes = Math.floor((timeDifference % 3600) / 60);
leftSeconds = timeDifference % 60;
}
setInterval(updateTime, 1000);


function startConfetti() {
    const audioElement = document.getElementById('myAudio');
    audioElement.play();

    const confettiDuration = 10 * 1000
    var end = Date.now() + (confettiDuration);

    var colors = ['#bb0000', '#ffffff'];

    (function frame() {
    confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
    });
    confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
    }());
}