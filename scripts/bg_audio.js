const bgAudio = new Audio('audio/bg_music.mp3');
const bgAudioTwo = new Audio('audio/bj_theme.mp3');
const bgAudioThree = new Audio('audio/bg_music_2.mp3');
const bgAudioFour = new Audio('audio/bj_end.mp3');
const bgAudioButton = document.querySelector('.audio-button');
const speakerEl = document.querySelector('.speaker');
bgAudio.volume = 0.3;
bgAudioTwo.volume = 0.3;
bgAudioThree.volume = 0.3;
bgAudioFour.volume = 0.3;

bgAudio.loop = true;
bgAudioTwo.loop = true;
bgAudioThree.loop = true;

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
        currentAudio = bgAudioTwo;
        bgAudioTwo.play();
    } else if (currentAudio === bgAudioTwo) {
        bgAudioTwo.pause();
        bgAudioButton.classList.remove('audio-2');
        bgAudioButton.classList.add('audio-3');
        currentAudio = bgAudioThree;
        bgAudioThree.play();
    } else if (currentAudio === bgAudioThree) {
        bgAudioThree.pause();
        bgAudioButton.classList.remove('audio-3');
        bgAudioButton.classList.add('audio-4');
        currentAudio = bgAudioFour;
        bgAudioFour.play();
    } else {
        bgAudioFour.pause();
        bgAudioButton.classList.remove('audio-4');
        speakerEl.classList.remove('playing');
        bgAudioButton.classList.remove('playing');
        currentAudio = null;
    }
});
