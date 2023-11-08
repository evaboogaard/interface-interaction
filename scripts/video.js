const videoButton = document.querySelector('.video-button');
const videos = document.querySelectorAll('video');
let currentVideoIndex = 0;

videoButton.addEventListener('click', () => {
    if (currentVideoIndex < videos.length) {
        // Pause all videos and remove visibility
        videos.forEach((video, index) => {
            if (index === currentVideoIndex) {
                video.play();
                video.classList.add('visible');
            } else {
                video.pause();
                video.classList.remove('visible');
            }
        });
        currentVideoIndex++;
    } else {
        // No video to play, pause all videos and remove visibility
        videos.forEach((video) => {
            video.pause();
            video.classList.remove('visible');
        });
        currentVideoIndex = 0;
    }
});
