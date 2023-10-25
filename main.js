const audio = document.querySelector("audio");
const playBtn = document.querySelector(".play");
const button = document.querySelector("button");
const containerHeader = document.querySelector(".container-header");
const containerMain = document.querySelector(".container-main");

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

containerHeader.addEventListener("click", (event) => {
  const currentBird = event.target.dataset.item;
  switch (currentBird) {
    case "solovei":
      containerMain.classList.toggle("solovei");
      audio.src = "./audio/solovey.mp3";
      break;
    case "drozd":
      containerMain.classList.toggle("drozd");
      audio.src = "./audio/drozd.mp3";
      break;
    case "zarynka":
      containerMain.classList.toggle("zarynka");
      audio.src = "./audio/zarynka.mp3";
      break;
    case "javaronok":
      containerMain.classList.toggle("javaronok");
      audio.src = "./audio/javoronok.mp3";
      break;
    case "slavka":
      containerMain.classList.toggle("slavka");
      audio.src = "./audio/slavka.mp3";
      break;

    default:
      break;
  }
});
button.addEventListener("click", toggeleBtn);
playBtn.addEventListener("click", clickHandler);
