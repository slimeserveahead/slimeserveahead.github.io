window.onload = function() {
    window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", function() {
    window.scrollTo(0, 0);
});

// --------------------------------------------------------------Social Media in Download Section---------------------------------------------------------------------- //
const h14 = document.querySelector('.h14');
const move = document.querySelector('.move');
const rightLine = document.querySelector('.rightLine');

let translated = false;

h14.onclick = function() {
    if (translated) {
        move.style.transform = 'translateX(32%)';
        h14.style.color = '#9cff00';
        h14.style.color.hovered = '#9cff00';
        rightLine.style.backgroundColor = '#9cff00';
        h14.addEventListener('mouseenter', () => {
            h14.style.color = 'white';
        });
        h14.addEventListener('mouseleave', () => {
            h14.style.color = '#9cff00'; 
        });
    } else {
        move.style.transform = 'translateX(-13%)';
        h14.style.color = 'white';
        rightLine.style.backgroundColor = 'white';
        h14.addEventListener('mouseenter', () => {
            h14.style.color = '#white';
        });
        h14.addEventListener('mouseleave', () => {
            h14.style.color = 'white'; 
        });
    }
    translated = !translated;
};

// ---------------------------------------------------------------- Navigation Bar Active Selector --------------------------------------------------------------------- //
const home = document.querySelector('#home');
const news = document.querySelector('#news');
const gameplay = document.querySelector('#gameplay');
const benefits = document.querySelector('#benefits');



const homeBounds = home.getBoundingClientRect();
const newsBounds = news.getBoundingClientRect();   
const gameplayBounds = gameplay.getBoundingClientRect();
const benefitsBounds = benefits.getBoundingClientRect();


const buttonsContainer = document.querySelector('.buttonsContainer');
const selector = document.querySelector('.selector');

function updateSelectorPosition() {
    const middleOfScreen = window.innerHeight / 2 + window.scrollY;

    const currentScrollPosition = middleOfScreen;    

    if (currentScrollPosition < newsBounds.top) {
        selector.style.transform = 'translateX(3vw)';       
    } else if (currentScrollPosition >= newsBounds.top && currentScrollPosition < gameplayBounds.top) {            
        selector.style.transform = 'translateX(14.3vw)';
    } else if (currentScrollPosition >= gameplayBounds.top && currentScrollPosition < benefitsBounds.top) {
        selector.style.transform = 'translateX(25.3vw)';
    } else {
        selector.style.transform = 'translateX(36.7vw)';
    }
    
}

window.addEventListener('scroll', updateSelectorPosition);

// ----------------------------------------------------------------------CAROUSEL----------------------------------------------------------- //
const carouselImages = document.querySelector('.carouselImages');
const carousel = document.querySelector('.carousel');
const leftArrow = carousel.querySelector('.left-arrow');
const rightArrow = carousel.querySelector('.right-arrow');

rightArrow.addEventListener('click', () => {
    carouselImages.scrollBy({ left: 300, behavior: 'smooth' });
    setTimeout(() => {
        checkArrowsVisibility();
    }, 600); // delay in milliseconds (0.5 seconds in this case)
});

leftArrow.addEventListener('click', () => {
    carouselImages.scrollBy({ left: -300, behavior: 'smooth' });
    setTimeout(() => {
        checkArrowsVisibility();
    }, 600); // delay in milliseconds (0.5 seconds in this case)
});

function checkArrowsVisibility() {
const scrollPos = carouselImages.scrollLeft;
const firstImage = carouselImages.firstElementChild;
const lastImage = carouselImages.lastElementChild;

if (scrollPos === 0) {
    leftArrow.style.display = 'none';
    rightArrow.style.display = 'block';

    leftArrow.style.visibility = "hidden";
    rightArrow.style.visibility = "visible";    
} else if (scrollPos >= carouselImages.scrollWidth - carouselImages.offsetWidth) {
    
    rightArrow.style.display = 'none';
    leftArrow.style.display = 'block';

    rightArrow.style.visibility = "hidden";
    leftArrow.style.visibility = "visible";
} else {
    leftArrow.style.display = 'block';
    rightArrow.style.display = 'block';

    leftArrow.style.visibility = "visible";
    rightArrow.style.visibility = "visible";
}

}

// initial check
checkArrowsVisibility();
// ------------------------------------------------------ SHOE CAROUSEL ----------------------------------------------- //
const leftShoeArrow = document.querySelector('.leftShoeArrow');
const rightShoeArrow = document.querySelector('.rightShoeArrow');

let isClickable = true;

leftShoeArrow.addEventListener('click', () => {
  if (isClickable) {
    isClickable = false;
    console.log("left is clicked");

    const middleShoe = document.querySelector('.middleShoe');
    const rightShoe = document.querySelector('.rightShoe');
    const leftShoe = document.querySelector('.leftShoe');
    const secondShoe = document.querySelector('.secondShoe');
    const sixthShoe = document.querySelector('.sixthShoe');
    const firstShoe = document.querySelector('.firstShoe');
    const seventhShoe = document.querySelector('.seventhShoe');

    const shoeDescriptionFirst = document.querySelector('.shoeDescriptionFirst');
    const shoeDescriptionSecond = document.querySelector('.shoeDescriptionSecond');
    const shoeDescriptionMiddle = document.querySelector('.shoeDescriptionMiddle');
    const shoeDescriptionRight = document.querySelector('.shoeDescriptionRight');
    const shoeDescriptionLeft = document.querySelector('.shoeDescriptionLeft');
    const shoeDescriptionSixth = document.querySelector('.shoeDescriptionSixth');
    const shoeDescriptionSeventh = document.querySelector('.shoeDescriptionSeventh');

    middleShoe.classList.remove('middleShoe');
    middleShoe.classList.add('rightShoe');
    
    rightShoe.classList.remove('rightShoe');
    rightShoe.classList.add('sixthShoe');

    sixthShoe.classList.remove('sixthShoe');
    sixthShoe.classList.add('seventhShoe');

    seventhShoe.classList.remove('seventhShoe');
    seventhShoe.classList.add('firstShoe');
    
    firstShoe.classList.remove('firstShoe');
    firstShoe.classList.add('secondShoe');

    secondShoe.classList.remove('secondShoe');
    secondShoe.classList.add('leftShoe');

    leftShoe.classList.remove('leftShoe');
    leftShoe.classList.add('middleShoe');



    shoeDescriptionMiddle.classList.remove('shoeDescriptionMiddle');
    shoeDescriptionMiddle.classList.add('shoeDescriptionRight');
    
    shoeDescriptionRight.classList.remove('shoeDescriptionRight');
    shoeDescriptionRight.classList.add('shoeDescriptionSixth');

    shoeDescriptionSixth.classList.remove('shoeDescriptionSixth');
    shoeDescriptionSixth.classList.add('shoeDescriptionSeventh');

    shoeDescriptionSeventh.classList.remove('shoeDescriptionSeventh');
    shoeDescriptionSeventh.classList.add('shoeDescriptionFirst');
    
    shoeDescriptionFirst.classList.remove('shoeDescriptionFirst');
    shoeDescriptionFirst.classList.add('shoeDescriptionSecond');

    shoeDescriptionSecond.classList.remove('shoeDescriptionSecond');
    shoeDescriptionSecond.classList.add('shoeDescriptionLeft');

    shoeDescriptionLeft.classList.remove('shoeDescriptionLeft');
    shoeDescriptionLeft.classList.add('shoeDescriptionMiddle');

    setTimeout(() => {
      isClickable = true;
    }, 800); // Set a delay of 1000ms (1 second) before allowing another click
  }
});

rightShoeArrow.addEventListener('click', () => {
    if (isClickable) {
      isClickable = false;
      console.log("left is clicked");
  
    const middleShoe = document.querySelector('.middleShoe');
    const rightShoe = document.querySelector('.rightShoe');
    const leftShoe = document.querySelector('.leftShoe');
    const secondShoe = document.querySelector('.secondShoe');
    const sixthShoe = document.querySelector('.sixthShoe');
    const firstShoe = document.querySelector('.firstShoe');
    const seventhShoe = document.querySelector('.seventhShoe');

    const shoeDescriptionFirst = document.querySelector('.shoeDescriptionFirst');
    const shoeDescriptionSecond = document.querySelector('.shoeDescriptionSecond');
    const shoeDescriptionMiddle = document.querySelector('.shoeDescriptionMiddle');
    const shoeDescriptionRight = document.querySelector('.shoeDescriptionRight');
    const shoeDescriptionLeft = document.querySelector('.shoeDescriptionLeft');
    const shoeDescriptionSixth = document.querySelector('.shoeDescriptionSixth');
    const shoeDescriptionSeventh = document.querySelector('.shoeDescriptionSeventh');

    middleShoe.classList.remove('middleShoe');
    middleShoe.classList.add('leftShoe');
    
    leftShoe.classList.remove('leftShoe');
    leftShoe.classList.add('secondShoe');

    secondShoe.classList.remove('secondShoe');
    secondShoe.classList.add('firstShoe');

    firstShoe.classList.remove('firstShoe');
    firstShoe.classList.add('seventhShoe');

    seventhShoe.classList.remove('seventhShoe');
    seventhShoe.classList.add('sixthShoe');

    sixthShoe.classList.remove('sixthShoe');
    sixthShoe.classList.add('rightShoe');

    rightShoe.classList.remove('rightShoe');
    rightShoe.classList.add('middleShoe');
    
    
    shoeDescriptionMiddle.classList.remove('shoeDescriptionMiddle');
    shoeDescriptionMiddle.classList.add('shoeDescriptionLeft');
    
    shoeDescriptionLeft.classList.remove('shoeDescriptionLeft');
    shoeDescriptionLeft.classList.add('shoeDescriptionSecond');

    shoeDescriptionSecond.classList.remove('shoeDescriptionSecond');
    shoeDescriptionSecond.classList.add('shoeDescriptionFirst');

    shoeDescriptionFirst.classList.remove('shoeDescriptionFirst');
    shoeDescriptionFirst.classList.add('shoeDescriptionSeventh');

    shoeDescriptionSeventh.classList.remove('shoeDescriptionSeventh');
    shoeDescriptionSeventh.classList.add('shoeDescriptionSixth');

    shoeDescriptionSixth.classList.remove('shoeDescriptionSixth');
    shoeDescriptionSixth.classList.add('shoeDescriptionRight');

    shoeDescriptionRight.classList.remove('shoeDescriptionRight');
    shoeDescriptionRight.classList.add('shoeDescriptionMiddle');



    setTimeout(() => {
    isClickable = true;
    }, 800); // Set a delay of 1000ms (1 second) before allowing another click
    }
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
/*----------------- Scroll animation --------------------------------------*/
const tutorialItems = document.querySelectorAll(".tutorialItems");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting);
        })
    }, 
    {
    rootMargin: "1000px 0px -200px 0px"
    }
);

tutorialItems.forEach(tutorialItem => {
    observer.observe(tutorialItem);
});
