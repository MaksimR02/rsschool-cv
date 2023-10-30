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
function toggleBtn() {
  button.classList.toggle("pause");
}

containerHeader.addEventListener("click", (event) => {
  const currentBird = event.target.dataset.item;
  const allClassesBirds = [
    "solovei",
    "drozd",
    "zarynka",
    "javaronok",
    "slavka",
    "forest",
  ];
  button.classList.remove("pause");
  containerMain.classList.remove(...allClassesBirds);

  switch (currentBird) {
    case "solovei":
      containerMain.classList.add("solovei");
      audio.src = "./audio/solovey.mp3";
      break;
    case "drozd":
      containerMain.classList.add("drozd");
      audio.src = "./audio/drozd.mp3";
      break;
    case "zarynka":
      containerMain.classList.add("zarynka");
      audio.src = "./audio/zarynka.mp3";
      break;
    case "javaronok":
      containerMain.classList.add("javaronok");
      audio.src = "./audio/javoronok.mp3";
      break;
    case "slavka":
      containerMain.classList.add("slavka");
      audio.src = "./audio/slavka.mp3";
      break;
    case "forest":
      containerMain.classList.toggle("forest");
      audio.src = "./audio/forest.mp3";
      break;
  }
});

button.addEventListener("click", toggleBtn);
playBtn.addEventListener("click", clickHandler);
