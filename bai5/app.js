const dayEl = document.querySelector("#addDay");
const monthEl = document.querySelector("#addMonth");
const yearEl = document.querySelector("#addYear");

const h3El = document.querySelector("#target");
const btn = document.querySelector("#addAction");

function monthToString(month) {
  if (month === 1) return "January.";
  if (month === 2) return "February";
  if (month === 3) return "March";
  if (month === 4) return "April";
  if (month === 5) return "May";
  if (month === 6) return "June";
  if (month === 7) return "July";
  if (month === 8) return "August";
  if (month === 9) return "September";
  if (month === 10) return "October";
  if (month === 11) return "November";
  return "December";
}

function render(day, month, year) {
  const formatDate = `
    <p>${year}-${month}-${day}</p>
    <p>${day}/${month}/${year}</p>
    <p>${day}.${month}.${year}</p>
    <p>${day},${monthToString(month).slice(0, 3)} ${year}</p>
    <p>${day},${monthToString(month)} ${year}</p>
  `;
  h3El.innerHTML = formatDate;
}

btn.addEventListener("click", () => {
  render(Number(dayEl.value), Number(monthEl.value), Number(yearEl.value));
});
