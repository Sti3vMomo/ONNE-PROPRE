//** Ce bout de code permet de limiter la taille de la page a 175% */

setInterval(function () {
  checkZoomLevel();
}, 5000);

function checkZoomLevel() {
  let zoomLevel = Math.round(window.devicePixelRatio * 100);
  if (zoomLevel > 175) {
    alert("Veuillez baisser le niveau de zoom avant de continuer ! Vous ne pouvez pas depasser 175%!");
    setTimeout(function () {
      checkZoomLevel();
    }, 5000);
  }
}

 
