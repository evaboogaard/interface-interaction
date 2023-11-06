const planetOne = document.querySelector('.planets button:first-of-type');
const planetOneSection = document.querySelector('.planets .baby');
const planetOneSectionStripeOne = document.querySelector(
    '.planets .baby .stripe-1'
);
const planetOneSectionStripeTwo = document.querySelector(
    '.planets .baby .stripe-2'
);

planetOne.addEventListener('click', () => {
    planetOne.classList.toggle('clicked');
    planetOneSection.classList.toggle('shown');
    planetOneSectionStripeOne.classList.toggle('shown');
    planetOneSectionStripeTwo.classList.toggle('shown');
});
