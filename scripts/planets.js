const planetOneButton = document.querySelector('.planets button:first-of-type');
const planetOneSection = document.querySelector('.planets .childhood');

planetOneButton.addEventListener('click', () => {
    planetOneButton.classList.toggle('clicked');
    planetOneSection.classList.toggle('shown');
});

const planetTwoButton = document.querySelector(
    '.planets button:nth-of-type(2)'
);
const planetTwoSection = document.querySelector('.planets .teen');

planetTwoButton.addEventListener('click', () => {
    planetTwoButton.classList.toggle('clicked');
    planetTwoSection.classList.toggle('shown');
});

const planetThreeButton = document.querySelector(
    '.planets button:nth-of-type(3)'
);
const planetThreeSection = document.querySelector('.planets .horsin-around');

planetThreeButton.addEventListener('click', () => {
    planetThreeButton.classList.toggle('clicked');
    planetThreeSection.classList.toggle('shown');
});

const planetFourButton = document.querySelector(
    '.planets button:nth-of-type(4)'
);
const planetFourSection = document.querySelector('.planets .biography');

planetFourButton.addEventListener('click', () => {
    planetFourButton.classList.toggle('clicked');
    planetFourSection.classList.toggle('shown');
});

const planetFiveButton = document.querySelector(
    '.planets button:nth-of-type(5)'
);
const planetFiveSection = document.querySelector('.planets .secretariat');

planetFiveButton.addEventListener('click', () => {
    planetFiveButton.classList.toggle('clicked');
    planetFiveSection.classList.toggle('shown');
});

const planetSixButton = document.querySelector(
    '.planets button:nth-of-type(6)'
);
const planetSixSection = document.querySelector('.planets .philbert');

planetSixButton.addEventListener('click', () => {
    planetSixButton.classList.toggle('clicked');
    planetSixSection.classList.toggle('shown');
});
