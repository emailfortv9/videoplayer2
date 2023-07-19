var videoList = [
    "https://s3.tebi.io/gigandi1/ko.2011.1080p.mkv",
    "https://s3.tebi.io/gigandi1/paiyaa.2010.1080p.mkv"
]; // replace with the URLs of your videos

var videoPlayer = document.getElementById("myVideo");
var nextVideoInfo = document.getElementById("nextVideoInfo");

function getVideoIndex() {
    var now = new Date();
    return now.getDate() % videoList.length; // change video every day
}

function getNextVideoDate() {
    var now = new Date();
    var nextDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1); // Next day
    return nextDate.toLocaleDateString(); // Format date as a string
}

function setVideoSource() {
    videoPlayer.src = videoList[getVideoIndex()];
    videoPlayer.play();
    nextVideoInfo.textContent = 'Next video on: ' + getNextVideoDate();
}

videoPlayer.addEventListener("ended", function () {
    setVideoSource();
});

// Set initial video
setVideoSource();

// Check every minute if we should start a new video
setInterval(function () {
    var now = new Date();
    if (now.getMinutes() === 0 && now.getSeconds() === 0) {
        // It's a new hour, start a new video
        setVideoSource();
    }
}, 60000); // 60000 milliseconds = 1 minute
