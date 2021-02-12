const body = document.querySelector(".body");
const buttonList = document.querySelector(".button-list");
const color = [
  "#4169E1",
  "#00FF7F",
  "#008080",
  "#EE82EE",
  "#AFEEEE",
  "#000080",
];
var i = 0;
buttonList.addEventListener("click", function () {
  i = i < color.length ? ++i : 0;
  body.style.backgroundColor = color[i];
});
