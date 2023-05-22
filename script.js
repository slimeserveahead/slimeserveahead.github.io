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
        selector.style.transform = 'translateX(2.2vw)';       
    } else if (currentScrollPosition >= newsBounds.top && currentScrollPosition < gameplayBounds.top) {            
        selector.style.transform = 'translateX(9.3vw)';
    } else if (currentScrollPosition >= gameplayBounds.top && currentScrollPosition < benefitsBounds.top) {
        selector.style.transform = 'translateX(16.4vw)';
    } else {
        selector.style.transform = 'translateX(23.5vw)';
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
const leftShoeArrow = document.querySelector('.shoePrevious');
const rightShoeArrow = document.querySelector('.shoeNext');

let isClickable = true;

leftShoeArrow.addEventListener('click', () => {
  if (isClickable) {
    isClickable = false;

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

let observerOptions = {
  rootMargin: "1000px 0px -200px 0px"
};

// Check screen size and update options if necessary
if (window.matchMedia("(max-width: 768px)").matches) {
  observerOptions.rootMargin = "1000px 0px -200px 0px";
} else {
  observerOptions.rootMargin = "5000px 0px -500px 0px";
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    })
  }, 
  observerOptions
);

tutorialItems.forEach(tutorialItem => {
  observer.observe(tutorialItem);
});

/*----------------- Benefits --------------------------------------*/
const rightClick = document.querySelector('.rightClick');
const leftClick = document.querySelector('.leftClick');

leftClick.addEventListener('click', () => {
    const leftBenefit = document.querySelector('.leftBenefit');
    const middleBenefit = document.querySelector('.middleBenefit');
    const rightBenefit = document.querySelector('.rightBenefit');
    const leftTextB = document.querySelector('.leftTextB');
    const middleTextB = document.querySelector('.middleTextB');
    const rightTextB = document.querySelector('.rightTextB');
    
    leftBenefit.classList.remove('leftBenefit');
    leftBenefit.classList.add('middleBenefit');

    middleBenefit.classList.remove('middleBenefit');
    middleBenefit.classList.add('rightBenefit');

    rightBenefit.classList.remove('rightBenefit');
    rightBenefit.classList.add('leftBenefit');

    leftTextB.classList.remove('leftTextB');
    leftTextB.classList.add('middleTextB');

    middleTextB.classList.remove('middleTextB');
    middleTextB.classList.add('rightTextB');

    rightTextB.classList.remove('rightTextB');
    rightTextB.classList.add('leftTextB');
});

rightClick.addEventListener('click', () => {
    const leftBenefit = document.querySelector('.leftBenefit');
    const middleBenefit = document.querySelector('.middleBenefit');
    const rightBenefit = document.querySelector('.rightBenefit');
    const leftTextB = document.querySelector('.leftTextB');
    const middleTextB = document.querySelector('.middleTextB');
    const rightTextB = document.querySelector('.rightTextB');
    
    leftBenefit.classList.remove('leftBenefit');
    leftBenefit.classList.add('rightBenefit');

    middleBenefit.classList.remove('middleBenefit');
    middleBenefit.classList.add('leftBenefit');

    rightBenefit.classList.remove('rightBenefit');
    rightBenefit.classList.add('middleBenefit');

    leftTextB.classList.remove('leftTextB');
    leftTextB.classList.add('rightTextB');

    middleTextB.classList.remove('middleTextB');
    middleTextB.classList.add('leftTextB');

    rightTextB.classList.remove('rightTextB');
    rightTextB.classList.add('middleTextB');

});

/* ---------------------------- SNAP SCROLL --------------------*/
const upperTutorial = document.querySelector('.upperTutorial');

upperTutorial.addEventListener('scroll', function() {
  if (upperTutorial.scrollTop + upperTutorial.clientHeight === upperTutorial.scrollHeight) {
    // Viewer has scrolled to the bottom of the element, disable scrolling
    document.body.style.overflow = 'hidden';
  } else {
    // Viewer has left the bottom of the element, enable scrolling
    document.body.style.overflow = '';
  }
});

// ---------------------------- REVISED CAROUSEL SECTION ----------------------------------------------- //
const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// ---------------------------- SHOW CHAT SUPPORT ----------------------------------------------- //
function showChat() {
  var chat = document.getElementById('chat');


  chat.classList.toggle("showChat");
}


const chatboxInput = document.getElementById('chatbox__input');
const sendIcon = document.querySelector('.sendIcon');

function toggleSendIcon(input) {
  var sendIcon = document.querySelector('.sendIcon');
  if (input.value.trim() === '') {
      sendIcon.style.display = 'none';
  } else {
      sendIcon.style.display = 'flex';
  }
}


function sendMessage() {
  var chatBox = document.querySelector('.chat-box');
  var input = document.querySelector('textarea');
  var messageText = input.value;
  
  if (messageText.trim() === '') {
    return;
  }
  
  var newMessage = document.createElement('div');
  newMessage.classList.add('message-container', 'operator');
  newMessage.innerHTML = '<div class="message">' + messageText + '</div>';

  chatBox.appendChild(newMessage);
  input.value = '';
  input.style.height = ''; // reset the textarea height
  toggleSendIcon(input);

  chatBox.scrollTop = chatBox.scrollHeight;
}

function auto_grow(element) {
  element.style.height = "100%";
  element.style.height = (element.scrollHeight)+"px";
}

function checkEnterKey(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    sendMessage();
  }
}

/*------------------------------ Support chat auto reply ------------------------------------*/
// get all the choice divs
const choices = document.querySelectorAll('.choice');

// loop through each choice div
choices.forEach(choice => {
 
  // add an event listener to the choice div
  choice.addEventListener('click', () => {
    // Initialize Variables
    var withdrawalAndDeposits = document.getElementById('withdrawalAndDeposits').textContent;
    var accountVerification = document.getElementById('accountVerification').textContent;
    var referralProgram = document.getElementById('referralProgram').textContent;
    var shoeAndReward = document.getElementById('shoeAndReward').textContent;
    var leaderboardAndChallenges = document.getElementById('leaderboardAndChallenges').textContent;
    var exchangePage = document.getElementById('exchangePage').textContent;
    var marketPage = document.getElementById('marketPage').textContent;

    // get the text content of the choice div
    const choiceText = choice.querySelector('.message').textContent;

    // create a new div with the same text content
    const newDiv = document.createElement('div');
    newDiv.classList.add('message-container', 'operator');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.textContent = choiceText;
    newDiv.appendChild(messageDiv);

    // get the chat box div
    const chatBox = document.querySelector('.chat-box');

    // insert the new div below any existing elements in the chat box
    chatBox.appendChild(newDiv);

    // create a new visitor div with text "Select your question"
    const visitorDiv = document.createElement('div');
    visitorDiv.classList.add('message-container', 'visitor');
    const visitorMessageDiv = document.createElement('div');
    visitorMessageDiv.classList.add('message');
    visitorMessageDiv.textContent = 'Select your question';
    visitorDiv.appendChild(visitorMessageDiv);

    // insert the new visitor div below the new operator div
    chatBox.appendChild(visitorDiv);

    // check if "Withdrawal and deposits" was clicked
    if (choiceText === withdrawalAndDeposits) {
      // create a new choices div with two choice divs with specified text and links
      const newChoicesDiv = document.createElement('div');
      newChoicesDiv.classList.add('choices');
      const newChoiceDiv1 = createChoiceDiv('How to withdraw from Walk Club?', 'https://www.walkclub.com/topic/163/how-to-withdraw');
      const newChoiceDiv2 = createChoiceDiv('How to deposit funds into my Walk Club account?', 'https://www.walkclub.com/topic/159/how-to-deposit?_=1683962846622&lang=en-US');
      newChoicesDiv.appendChild(newChoiceDiv1);
      newChoicesDiv.appendChild(newChoiceDiv2);

      // insert the new choices div below the visitor div
      chatBox.appendChild(newChoicesDiv);
    } else if (choiceText === accountVerification) {
      // create a new choices div with two choice divs with specified text and links
      const newChoicesDiv = document.createElement('div');
      newChoicesDiv.classList.add('choices');
      const newChoiceDiv1 = createChoiceDiv('Why does my Walk Club account need to be verified?', 'https://www.walkclub.com/topic/188/why-walkclub-account-need-to-verified');
      const newChoiceDiv2 = createChoiceDiv('How can I start earning after registering with Walk Club? What do I need to do after registration?', 'https://www.walkclub.com/topic/112/how-can-i-start-after-registration-in-walk-club-what-i-need-to-do-after-registration');
      const newChoiceDiv3 = createChoiceDiv('How do I register with Walk Club', 'https://www.walkclub.com/topic/111/how-to-register-in-walk-club?_=1683964963238&lang=en-US');
      newChoicesDiv.appendChild(newChoiceDiv1);
      newChoicesDiv.appendChild(newChoiceDiv2);
      newChoicesDiv.appendChild(newChoiceDiv3);

      // insert the new choices div below the visitor div
      chatBox.appendChild(newChoicesDiv);
    }  else if (choiceText === referralProgram) {
      // create a new choices div with two choice divs with specified text and links
      const newChoicesDiv = document.createElement('div');
      newChoicesDiv.classList.add('choices');
      const newChoiceDiv1 = createChoiceDiv('How do I obtain my referral link?','https://www.walkclub.com/topic/135/how-do-i-get-my-referral-link');
      const newChoiceDiv2 = createChoiceDiv("What are the benefits of Walk Club's referral program?" , 'https://www.walkclub.com/topic/126/what-are-the-benefits-of-referral');
      const newChoiceDiv3 = createChoiceDiv('Is my referral link valid for a limited time or indefinitely?' , 'https://www.walkclub.com/topic/172/is-my-referral-for-all-time-or-monthly');
      
      newChoicesDiv.appendChild(newChoiceDiv1);
      newChoicesDiv.appendChild(newChoiceDiv2);
      newChoicesDiv.appendChild(newChoiceDiv3);

      // insert the new choices div below the visitor div
      chatBox.appendChild(newChoicesDiv);
    } else if (choiceText === shoeAndReward) {

      // create a new choices div with two choice divs with specified text and links
      const newChoicesDiv = document.createElement('div');
      newChoicesDiv.classList.add('choices');
      const newChoiceDiv1 = createChoiceDiv('How does the Walk Club shoe work?','https://www.walkclub.com/topic/123/how-does-the-walkclub-shoe-work');
      const newChoiceDiv2 = createChoiceDiv('What are eggs, and how can I earn them?','https://www.walkclub.com/topic/115/what-is-eggs-how-can-this-be-as-my-earning');
      const newChoiceDiv3 = createChoiceDiv('If I am using a paid shoe but not active, will it expire in 35 days too?','https://www.walkclub.com/topic/130/what-if-i-am-using-paid-shoes-and-not-active-will-it-expire-in-35-days-too');
      const newChoiceDiv4 = createChoiceDiv('If I use a retrieve with a paid shoe, will that be considered a completed task for extra rewards?','https://www.walkclub.com/topic/129/if-i-am-using-a-retrieve-with-a-paid-shoe-will-that-be-decided-for-extra-rewards-as-a-completed-task');
      const newChoiceDiv5 = createChoiceDiv('What is the contribution value and how does it work?','https://www.walkclub.com/topic/133/how-does-contribution-value-work');
      const newChoiceDiv6 = createChoiceDiv('What is the active value and how does it work?','https://www.walkclub.com/topic/125/how-does-active-value-work');
      const newChoiceDiv7 = createChoiceDiv('How can I claim my daily rewards?','https://www.walkclub.com/topic/114/how-to-claim-my-daily-rewards');
      const newChoiceDiv8 = createChoiceDiv('How can I start earning with Walk Club?','https://www.walkclub.com/topic/113/how-to-start-earning-with-walk-club');
      const newChoiceDiv9 = createChoiceDiv('How much are the withdrawal and recharge amount ranges in Walk Club?','https://www.walkclub.com/topic/201/how-much-is-withdrawal-and-recharge-amount-range-in-walkclub');
      const newChoiceDiv10 = createChoiceDiv('Does Walk Club count steps even when the screen is turned off?','https://www.walkclub.com/topic/178/did-walkclub-count-the-steps-even-when-the-screen-was-turned-off');
      const newChoiceDiv11 = createChoiceDiv('What is the use of retrieve points?','https://www.walkclub.com/topic/175/what-is-the-use-of-retrieve-points');
      const newChoiceDiv12 = createChoiceDiv('What is the sale fee in Walk Club?','https://www.walkclub.com/topic/174/what-is-the-sale-fee-in-walk-club');
      const newChoiceDiv13 = createChoiceDiv('What is the daily reward amount with a 500 shoe?','https://www.walkclub.com/topic/173/how-much-is-daily-rewards-with-500-shoe');
      const newChoiceDiv14 = createChoiceDiv('What are the profits of the shoes? Please explain.','https://www.walkclub.com/topic/128/what-are-the-profits-of-the-shoes-please-explain?_=1683967278698&lang=en-US');
      const newChoiceDiv15 = createChoiceDiv('Can I use free shoes all the time or how do I prevent the shoe from expiring?','https://www.walkclub.com/topic/127/can-i-use-free-shoes-all-the-time-or-how-to-make-the-shoe-not-expire');
      const newChoiceDiv16 = createChoiceDiv('What is the Walk Club level for and how can I level up?','https://www.walkclub.com/topic/124/what-is-the-walk-club-level-for-and-how-to-level-up');
      const newChoiceDiv17 = createChoiceDiv('Can I earn without a shoe?','https://www.walkclub.com/topic/122/can-i-earn-without-shoe');
      const newChoiceDiv18 = createChoiceDiv('When will my shoe expire and what do I do after that?','https://www.walkclub.com/topic/121/when-my-shoe-will-expire-and-how-to-do-after-that');
      const newChoiceDiv19 = createChoiceDiv('I completed 2000 steps, but did not receive any rewards. Why?','https://www.walkclub.com/topic/116/i-take-more-than-2000-steps-but-rewards-not-increase-why');
      const newChoiceDiv20 = createChoiceDiv('How can I calculate my daily earnings?','https://www.walkclub.com/topic/117/how-can-i-know-or-calculate-my-daily-earning');
      
      newChoicesDiv.appendChild(newChoiceDiv1);
      newChoicesDiv.appendChild(newChoiceDiv2);
      newChoicesDiv.appendChild(newChoiceDiv3);
      newChoicesDiv.appendChild(newChoiceDiv3);
      newChoicesDiv.appendChild(newChoiceDiv4);
      newChoicesDiv.appendChild(newChoiceDiv5);
      newChoicesDiv.appendChild(newChoiceDiv6);
      newChoicesDiv.appendChild(newChoiceDiv7);
      newChoicesDiv.appendChild(newChoiceDiv8);
      newChoicesDiv.appendChild(newChoiceDiv9);
      newChoicesDiv.appendChild(newChoiceDiv10);
      newChoicesDiv.appendChild(newChoiceDiv11);
      newChoicesDiv.appendChild(newChoiceDiv12);
      newChoicesDiv.appendChild(newChoiceDiv13);
      newChoicesDiv.appendChild(newChoiceDiv14);
      newChoicesDiv.appendChild(newChoiceDiv15);
      newChoicesDiv.appendChild(newChoiceDiv16);
      newChoicesDiv.appendChild(newChoiceDiv17);
      newChoicesDiv.appendChild(newChoiceDiv18);
      newChoicesDiv.appendChild(newChoiceDiv19);
      newChoicesDiv.appendChild(newChoiceDiv20);

      chatBox.appendChild(newChoicesDiv);
    } else if (choiceText === leaderboardAndChallenges) {
      // create a new choices div with two choice divs with specified text and links
      const newChoicesDiv = document.createElement('div');
      newChoicesDiv.classList.add('choices');
      const newChoiceDiv1 = createChoiceDiv('Why is my email displayed instead of my name on the leaderboard?','https://www.walkclub.com/topic/177/i-have-my-own-name-but-instead-it-is-showing-my-email-in-the-leaderboard-why');
      const newChoiceDiv2 = createChoiceDiv('Why is the leaderboard useful for me? and what is the Walk Club challenge?','https://www.walkclub.com/topic/137/what-is-the-leader-board-useful-for-me-what-is-walk-club-challenge');
      
      newChoicesDiv.appendChild(newChoiceDiv1);
      newChoicesDiv.appendChild(newChoiceDiv2);

      // insert the new choices div below the visitor div
      chatBox.appendChild(newChoicesDiv);
    } else if (choiceText === exchangePage) {

      // create a new choices div with two choice divs with specified text and links
      const newChoicesDiv = document.createElement('div');
      newChoicesDiv.classList.add('choices');
      const newChoiceDiv1 = createChoiceDiv('What is the general statistics on the exchange page of Walk Club?','https://www.walkclub.com/topic/170/what-is-the-the-general-statistics-in-the-exchange-page-of-walk-club');
      const newChoiceDiv2 = createChoiceDiv('What is the sell and buy options on the exchange page of Walk Club?','https://www.walkclub.com/topic/169/what-is-the-sell-buy-options-in-the-exchange-page-of-walkclub');
      const newChoiceDiv3 = createChoiceDiv('I have posted my eggs to sell, but have not received my profits yet. Why?','https://www.walkclub.com/topic/140/i-have-posted-my-eggs-to-sell-but-still-not-get-my-profit-why');
      const newChoiceDiv4 = createChoiceDiv('What is the withdrawal fee in Walk Club?','https://www.walkclub.com/topic/132/what-is-the-withdrawal-fee-in-walk-club');
      const newChoiceDiv5 = createChoiceDiv('How to make mobile recharge with flash sale?','https://www.walkclub.com/topic/118/how-to-make-mobile-recharge-with-flash-sale');
      const newChoiceDiv6 = createChoiceDiv('I have 5 eggs. How can I withdraw them?','https://www.walkclub.com/topic/120/i-have-5-eggs-now-how-can-i-withdraw-it?_=1683969399372&lang=en-US');
            
      newChoicesDiv.appendChild(newChoiceDiv1);
      newChoicesDiv.appendChild(newChoiceDiv2);
      newChoicesDiv.appendChild(newChoiceDiv3);
      newChoicesDiv.appendChild(newChoiceDiv3);
      newChoicesDiv.appendChild(newChoiceDiv4);
      newChoicesDiv.appendChild(newChoiceDiv5);
      newChoicesDiv.appendChild(newChoiceDiv6);
      
      chatBox.appendChild(newChoicesDiv);
    } else if (choiceText === marketPage) {

      // create a new choices div with two choice divs with specified text and links
      const newChoicesDiv = document.createElement('div');
      newChoicesDiv.classList.add('choices');
      const newChoiceDiv1 = createChoiceDiv('What are the requirements for a 50 INR mobile recharge?','https://www.walkclub.com/topic/119/what-is-the-requirement-for-50-inr-mobile-recharge?_=1683970484791&lang=en-US');
                  
      newChoicesDiv.appendChild(newChoiceDiv1);
            
      chatBox.appendChild(newChoicesDiv);
    }
  
    chatBox.scrollTop = chatBox.scrollHeight;
  });
});

function createChoiceDiv(text, link) {
  // create a new choice div with specified text and link
  const newChoiceDiv = document.createElement('div');
  newChoiceDiv.classList.add('message-container', 'choice');
  const newLink = document.createElement('a');
  newLink.href = link;
  newLink.target = '_blank';
  const newMessageDiv = document.createElement('div');
  newMessageDiv.classList.add('message');
  newMessageDiv.textContent = text;
  newLink.appendChild(newMessageDiv);
  newChoiceDiv.appendChild(newLink);

  return newChoiceDiv;
}

/*--------------------------------------------------- BENEFITS -------------------------------------------------------------*/
const benefitPics = document.getElementById("benefitPics");

let observerBenefits = {
  rootMargin: "1000px 0px -200px 0px"
};

// Check screen size and update options if necessary
if (window.matchMedia("(max-width: 768px)").matches) {
  observerBenefits.rootMargin = "1000px 0px -200px 0px";
} else {
  observerBenefits.rootMargin = "5000px 0px -500px 0px";
}

const observerThree = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      console.log("benefits");
      const leftBenefit = document.querySelector('.leftBenefit');
      const middleBenefit = document.querySelector('.middleBenefit');
      const rightBenefit = document.querySelector('.rightBenefit');
      const leftTextB = document.querySelector('.leftTextB');
      const middleTextB = document.querySelector('.middleTextB');
      const rightTextB = document.querySelector('.rightTextB');
      
      leftBenefit.classList.remove('leftBenefit');
      leftBenefit.classList.add('rightBenefit');

      middleBenefit.classList.remove('middleBenefit');
      middleBenefit.classList.add('leftBenefit');

      rightBenefit.classList.remove('rightBenefit');
      rightBenefit.classList.add('middleBenefit');

      leftTextB.classList.remove('leftTextB');
      leftTextB.classList.add('rightTextB');

      middleTextB.classList.remove('middleTextB');
      middleTextB.classList.add('leftTextB');

      rightTextB.classList.remove('rightTextB');
      rightTextB.classList.add('middleTextB');
    })
  }, 
  observerBenefits
);

observerThree.observe(benefitPics);