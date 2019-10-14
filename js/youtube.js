// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

// calculate size of iframe
var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
w -= 50;
var h = w * 9 / 16;

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: h,
    width: w,
    videoId: 's4Z97QVhb9k',
    events: {
      'onReady': onPlayerReady
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  player.loadPlaylist({
    list: 'PLYiypSXRnsMrhMqELv9y1ukaCvphjy1vP'
  });
  event.target.playVideo();
}
