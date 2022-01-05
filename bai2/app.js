var h3txt = document.querySelector("h3");
var input = document.querySelector("#txtInput");

input.addEventListener("keyup", () => {
  h3txt.innerText = input.value;
});
