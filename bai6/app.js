const dayEl = document.querySelector("#addDay");
const monthEl = document.querySelector("#addMonth");
const yearEl = document.querySelector("#addYear");

const h3El = document.querySelector("#target");
const btn = document.querySelector("#addAction");

btn.addEventListener("click", () => {
  var dt = moment(
    `${dayEl.value}/${monthEl.value}/${yearEl.value}`,
    "YYYY/MM/DD"
  );
  dt = moment().format("dddd");
  h3El.innerHTML = dt;
});
