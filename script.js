var videoList = [
  {
    url: "https://s3.tebi.io/drivegdfli/The.Dark.Knight.2008t.mp4",
    name: "The Dark Knight"
  },
  {
    url: "https://s3.tebi.io/gigandi1/Asvins.2023.1080p.mkv",
    name: "Asvins 2023"
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
