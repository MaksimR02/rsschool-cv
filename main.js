const audio = document.querySelector("audio");
const playBtn = document.querySelector(".play");
const button = document.querySelector("button");
// const animationPause = document.querySelector("");

function clickHandler() {
  if (audio.paused) {
    audio.currentTime = 0;
    audio.play();
  } else {
    audio.pause();
  }
}
function toggeleBtn() {
  button.classList.toggle("pause");
}

button.addEventListener("click", toggeleBtn);
playBtn.addEventListener("click", clickHandler);
