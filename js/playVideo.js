const videoItemBox = document.querySelector('.video').querySelector('.item-box');

const itemImg = videoItemBox.querySelector('.item-img');
const videoPopMask = document.querySelector('.video-pop-mask');
const videoPopBox = document.querySelector('.video-pop-box');

const videoContent = videoPopBox.querySelector('.video-content');
const videoTitle = videoPopBox.querySelector('.video-title');
const close = videoTitle.querySelector('.close');
const cover = videoContent.querySelector('.cover-video').querySelector('.cover');
const video = videoContent.querySelector('.cover-video').querySelector('.video');
const playBtn = videoContent.querySelector('.cover-video').querySelector('.play-button');

const controller = videoContent.querySelector('.controller');
const progressBarBg = controller.querySelector('.progress-bar-bg');
const progressBarFront = progressBarBg.querySelector('.progress-bar-front');
const controlsHolder = controller.querySelector('.controls-holder');
const playPasue = controlsHolder.querySelector('.play-pause');


const showVideoPopBox = () => {
    videoPopMask.style.display = "block";
    videoPopBox.style.display = "block";
    cover.style.display = "block";
    video.style.display = "none";
    playBtn.style.display = "block";
    progressBarFront.style.width = "0";
}

const closeVideoPopBox = () => {
    videoPopMask.style.display = "none";
    videoPopBox.style.display = "none";
    video.pause();
}

itemImg.addEventListener('click', () => {
    showVideoPopBox();
})

close.addEventListener('click', () => {
    closeVideoPopBox();
})

playBtn.addEventListener('click', () => {
    cover.style.display = "none";
    video.style.display = "block";
    video.load();
    video.play();
    playBtn.style.display = "none";
})

video.addEventListener('timeupdate', () => {
    let progressBarFrontPos = video.currentTime / video.duration;
    progressBarFront.style.width = progressBarFrontPos * 100 + "%";
})


