@keyframes glowing {
  0% {
    text-shadow: 0 0 0px #9AFF01;
  }
  12.5% {
    text-shadow: 0 0 25px #9AFF01;
  }
  25% {
    text-shadow: 0 0 50px #9AFF01;
  }
  37.5% {
    text-shadow: 0 0 75px #9AFF01;
  }
  50% {
    text-shadow: 0 0 100px #9AFF01;
  }
  100% {
    text-shadow: 1 0 1500px #9AFF01;
  }
}

/* Define the animation styles for the new glow */


/* Apply the animations to the element */
.h14 {
  position: relative;
  animation: glowing 3s ease-in-out infinite;
} 