const planetOneButton = document.querySelector('.planets button:first-of-type');
const planetOneSection = document.querySelector('.planets .childhood');
const planetTwoButton = document.querySelector(
    '.planets button:nth-of-type(2)'
);
const planetTwoSection = document.querySelector('.planets .teen');
const planetThreeButton = document.querySelector(
    '.planets button:nth-of-type(3)'
);
const planetThreeSection = document.querySelector('.planets .horsin-around');
const planetFourButton = document.querySelector(
    '.planets button:nth-of-type(4)'
);
const planetFourSection = document.querySelector('.planets .biography');
const planetFiveButton = document.querySelector(
    '.planets button:nth-of-type(5)'
);
const planetFiveSection = document.querySelector('.planets .secretariat');
const planetSixButton = document.querySelector(
    '.planets button:nth-of-type(6)'
);
const planetSixSection = document.querySelector('.planets .philbert');

const planetClick = new Audio('audio/typewriter.wav');
planetClick.volume = 0.3;

planetOneButton.addEventListener('click', () => {
    planetOneButton.classList.toggle('clicked');
    planetOneSection.classList.toggle('shown');
    planetClick.play();
});

planetTwoButton.addEventListener('click', () => {
    planetTwoButton.classList.toggle('clicked');
    planetTwoSection.classList.toggle('shown');
    planetClick.play();
});

planetThreeButton.addEventListener('click', () => {
    planetThreeButton.classList.toggle('clicked');
    planetThreeSection.classList.toggle('shown');
    planetClick.play();
});

planetFourButton.addEventListener('click', () => {
    planetFourButton.classList.toggle('clicked');
    planetFourSection.classList.toggle('shown');
    planetClick.play();
});

planetFiveButton.addEventListener('click', () => {
    planetFiveButton.classList.toggle('clicked');
    planetFiveSection.classList.toggle('shown');
    planetClick.play();
});

planetSixButton.addEventListener('click', () => {
    planetSixButton.classList.toggle('clicked');
    planetSixSection.classList.toggle('shown');
    planetClick.play();
});
