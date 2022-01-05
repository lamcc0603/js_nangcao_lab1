const button = document.querySelector(".card__button");

const view = document.querySelector("#time");

let count = 60;
let counter;
window.onload = function () {
  console.log("onload");
  counter = setInterval(timer, 1000);
  function timer() {
    count -= 1;
    if (count === -1) {
      clearInterval(counter);
      view.classList.add("active");
      return;
    }

    view.innerHTML = count;
  }
};

window.addEventListener("focus", function () {
  console.log("focus");
  counter = setInterval(timer, 1000);
  function timer() {
    count -= 1;
    if (count === -1) {
      clearInterval(counter);
      view.classList.add("active");
      return;
    }

    view.innerHTML = count;
  }
});

window.addEventListener("blur", function () {
  console.log("blur");
  clearInterval(counter);
});
