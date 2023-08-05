// Your SolveCaptcha API key
const apiKey = 'e77349835f0cc8327f2e0fa2c365cbaa';

// Store the last CAPTCHA verification timestamp and IP address
let lastCaptchaVerification = {
  timestamp: null,
  ipAddress: null,
};

// Function to get the user's IP address
async function getUserIpAddress() {
  const response = await fetch('https://api.ipify.org?format=json');
  const data = await response.json();
  return data.ip;
}

// Function to check if 4 hours have passed since the last CAPTCHA verification
function shouldShowCaptcha() {
  const currentTime = new Date().getTime();
  const fourHours = 4 * 60 * 60 * 1000;

  if (
    !lastCaptchaVerification.timestamp ||
    currentTime - lastCaptchaVerification.timestamp > fourHours
  ) {
    return true;
  }

  return false;
}

// Function to load and display the CAPTCHA
async function loadCaptcha() {
  // Check if the user needs to solve a CAPTCHA
  if (shouldShowCaptcha()) {
    // Get the user's IP address
    const ipAddress = await getUserIpAddress();

    // Check if the IP address has changed
    if (ipAddress !== lastCaptchaVerification.ipAddress) {
      // Update the last CAPTCHA verification data
      lastCaptchaVerification.timestamp = new Date().getTime();
      lastCaptchaVerification.ipAddress = ipAddress;

      // Load and display the CAPTCHA using the SolveCaptcha API
      // Add your CAPTCHA implementation here
    }
  }
}

// Call the loadCaptcha function when the page loads
loadCaptcha();

// Rest of the video player code
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
