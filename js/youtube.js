// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// calculate size of iframe
let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
w -= 50;
w = w > 900 ? 900 : w;
let h = w * 9 / 16;

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player1;
let player2;

function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('player1', {
        height: h,
        width: w,
        videoId: 's4Z97QVhb9k',
        events: {
            'onReady': onPlayerReady,
        }
    });
    player2 = new YT.Player('player2', {
        height: h,
        width: w,
        videoId: '1ZgTbh3psRI',
        events: {
            'onReady': onPlayerReady,
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    // event.target.loadPlaylist({
    //     list: 'PLYiypSXRnsMrhMqELv9y1ukaCvphjy1vP'
    // });
    // function for autoplay: event.target.playVideo();
}
