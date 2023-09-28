let point = document.querySelectorAll(".point");
let imageSlider = document.querySelectorAll(".imageSlider");
let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");
let counter = 0;

//burger menu

(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".nav");
  const menuClose = document.querySelector(".header-nav-close");

  burgerItem.addEventListener("click", () => {
    menu.classList.add("nav-active");
  });

  menuClose.addEventListener("click", () => {
    menu.classList.remove("nav-active");
  });
})();

//slider about

point[0].classList.add("active-img");

imageSlider[0].classList.add("active-img");

for (let i = 0; i < point.length; i++) {
  point[i].addEventListener("click", () => {
    for (let k = 0; k < imageSlider.length; k++) {
      point[k].classList.remove("active-img");

      imageSlider[k].classList.remove("active-img");
    }

    counter = i;

    imageSlider[counter].classList.add("active-img");

    point[counter].classList.add("active-img");
  });
}

leftBtn.addEventListener("click", () => {
  for (let k = 0; k < imageSlider.length; k++) {
    point[k].classList.remove("active-img");
    imageSlider[k].classList.remove("active-img");
  }
  counter--;

  if (counter < 0) {
    counter = imageSlider.length - 1;
  }

  imageSlider[counter].classList.add('active-img');
  point[counter].classList.add("active-img");
});

rightBtn.addEventListener("click", () => {
  for (let k = 0; k < imageSlider.length; k++) {
    point[k].classList.remove("active-img");
    imageSlider[k].classList.remove("active-img");
  }
  counter++;

  if (counter >= imageSlider.length) {
    counter = 0;
  }

  imageSlider[counter].classList.add('active-img');
  point[counter].classList.add("active-img");
});
