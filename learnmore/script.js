window.onload = function() {
    window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", function() {
    window.scrollTo(0, 0);
});



/* ------------------------- navbar menu -------------------------------------*/ 
function toggleMenu() {
    var menu = document.getElementById('menu-icon');
    var buttons = document.getElementById('buttons');
    var movingBorder = document.getElementById('movingBorder');

    menu.classList.toggle('bx-menu');
    menu.classList.toggle('bx-x');

    buttons.classList.toggle('buttonsShow');

    movingBorder.classList.toggle('showBorder');
}
      //Move follower div when mouse move
document.addEventListener("mousemove", function(event) {
    var follower = document.querySelector(".follower");
    follower.style.top = (event.clientY - 200) + "px";
});

//Hide follower div when sidebarmover is hovered
var sidebarmover = document.querySelector(".sidebarmover");
var follower = document.querySelector(".follower");

sidebarmover.addEventListener("mouseenter", function() {
    follower.style.display = "none";
});

sidebarmover.addEventListener("mouseleave", function() {
    follower.style.display = "block";
});

  /*----------------- Scroll animation --------------------------------------*/
const hiddenSections = document.querySelectorAll(".hiddenSections");

let observerOptionsTwo = {
    rootMargin: "1000px 0px -200px 0px"
};

// Check screen size and update options if necessary
if (window.matchMedia("(max-width: 768px)").matches) {
    observerOptionsTwo.rootMargin = "1000px 0px -200px 0px";
} else {
    observerOptionsTwo.rootMargin = "5000px 0px -500px 0px";
}

const observerTwo = new IntersectionObserver(
entries => {
    entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting);
    console.log("is intersecting");
    });
}, 
observerOptionsTwo
);

hiddenSections.forEach(hiddenSection => {
    observerTwo.observe(hiddenSection);
});