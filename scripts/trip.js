const tripButton = document.querySelector('.trip-button');
const tripAudio = new Audio('audio/trip.mp3');
const documentEl = document.documentElement;

tripAudio.loop = true;

tripButton.addEventListener('click', () => {
    if (documentEl.classList.contains('trip')) {
        tripAudio.pause();
        tripButton.classList.remove('clicked');
        documentEl.classList.remove('trip');
    } else {
        documentEl.classList.add('trip');
        tripButton.classList.add('clicked');
        tripAudio.play();
    }
});
