const soundState = {
  "cursorHover": false
}
const playSound = (e) => {
  if(!e.target.classList.contains("sound-cursor") || soundState.cursorHover) return;
  var audio = new Audio('/sound/cursor.mp3');
  audio.play();
  soundState.cursorHover = true;
}
const sound = document.querySelector(".sound-cursor");
sound.addEventListener("mouseover", playSound);
sound.addEventListener("mouseleave", () => {
  soundState.cursorHover = false;
});