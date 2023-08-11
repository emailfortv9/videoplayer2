var videoList = [
  {
    url: "https://s3.tebi.io/drivegdfli/The.Dark.Knight.2008t.mp4",
    name: "Asvins"
  },
  {
    url: "https://onelineplayer.com/player.html?autoplay=false&autopause=true&muted=false&loop=false&url=https%3A%2F%2Fs3.tebi.io%2Fsakthi%2FPor_Thozhil3.mkv&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true",
    name: " Por Thozhil 2023"
  },
  // Add more videos with their names here
];

var videoPlayer = document.getElementById("myVideo");
var currentVideoName = document.getElementById("currentVideoName");
var nextVideoName = document.getElementById("nextVideoName");

// Disable right click on video player
videoPlayer.oncontextmenu = function(event) {
  event.preventDefault();
  return false;
};

// Disable right click on the whole screen
document.body.oncontextmenu = function(event) {
  event.preventDefault();
  return false;
};

function getVideoIndex() {
  var now = new Date();
  return now.getDate() % videoList.length; // change video every day
}

function getCurrentVideoName() {
  return videoList[getVideoIndex()].name;
}

function getNextVideoName() {
  var nextIndex = (getVideoIndex() + 1) % videoList.length;
  return videoList[nextIndex].name;
}

function setVideoSource() {
  videoPlayer.src = videoList[getVideoIndex()].url;
  videoPlayer.play();
  currentVideoName.textContent = 'Current Movie: ' + getCurrentVideoName();
  nextVideoName.textContent = 'Next Movie: ' + getNextVideoName();
}

videoPlayer.addEventListener("ended", function () {
  setVideoSource();
});

// Set initial video
setVideoSource();
// ... (previous script.js code)

// Custom play/pause button
var playPauseButton = document.querySelector(".play-pause-button");
var playPauseIcon = playPauseButton.querySelector("i");

videoPlayer.addEventListener("click", function () {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playPauseIcon.classList.remove("fa-play");
    playPauseIcon.classList.add("fa-pause");
  } else {
    videoPlayer.pause();
    playPauseIcon.classList.remove("fa-pause");
    playPauseIcon.classList.add("fa-play");
  }
});

videoPlayer.addEventListener("play", function () {
  playPauseButton.classList.add("hidden");
});

videoPlayer.addEventListener("pause", function () {
  playPauseButton.classList.remove("hidden");
});

playPauseButton.addEventListener("click", function () {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playPauseIcon.classList.remove("fa-play");
    playPauseIcon.classList.add("fa-pause");
  } else {
    videoPlayer.pause();
    playPauseIcon.classList.remove("fa-pause");
    playPauseIcon.classList.add("fa-play");
  }
});
