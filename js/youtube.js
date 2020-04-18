// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

// calculate size of iframe
let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
h -= 100;
let w = h * 16 / 9;

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
function onPlayerReady() {
  player.loadPlaylist({
    list: 'PLYiypSXRnsMrhMqELv9y1ukaCvphjy1vP'
  });
  // function for autoplay: event.target.playVideo();
}
