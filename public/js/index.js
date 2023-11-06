//* Video se repeter a l'infini */
const videos = document.querySelectorAll("video");

videos.forEach(function (video) {
  video.addEventListener(
    "ended",
    function () {
      this.currentTime = 0;
      this.play();
    },
    false
  );
});
