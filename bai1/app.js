var a = document.querySelector("#target");

function hover() {
  a.style.background = "#2af598";
}

function out() {
  a.style.background = "#009efd";
  a.innerText = "";
}
a.addEventListener("mouseover", hover);
a.addEventListener("mouseout", out);
