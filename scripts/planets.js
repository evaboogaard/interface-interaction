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
