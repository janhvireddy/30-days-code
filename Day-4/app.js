const body = document.querySelector("body");
const btnclick = document.querySelector(".btnclick");
let colors = ["red", "green", "white", "blue"];
body.style.backgroundColor = "purple";
btnclick.addEventListener("click", function addColor() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
});
