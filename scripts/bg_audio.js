const bgAudio = new Audio('audio/bg_music.mp3');
const bgAudioTwo = new Audio('audio/bg_music_2.mp3');
const bgAudioButton = document.querySelector('.audio-button');
const speakerEl = document.querySelector('.speaker');
bgAudio.volume = 0.3;
bgAudioTwo.volume = 0.3;

let currentAudio = null;

bgAudioButton.addEventListener('click', () => {
    if (currentAudio === null) {
        bgAudio.play();
        currentAudio = bgAudio;
        bgAudioButton.classList.add('audio-1');
        speakerEl.classList.add('playing');
    } else if (currentAudio === bgAudio) {
        bgAudio.pause();
        bgAudioButton.classList.remove('audio-1');
        bgAudioButton.classList.add('audio-2');
        bgAudioButton.classList.remove('playing');
        currentAudio = bgAudioTwo;
        bgAudioTwo.play();
    } else {
        bgAudioTwo.pause();
        bgAudioButton.classList.remove('audio-2');
        speakerEl.classList.remove('playing');
        currentAudio = null;
    }
});
