const anime = require("animejs");
console.log(anime);
const animatedHeader = document.querySelector(".titleHeading");

anime({
  targets: animatedHeader,
  left: "240px",
  easing: "easeInOutExpo",
  duration: 3000,
});
