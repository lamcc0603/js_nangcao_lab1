var users = [
  {
    id: 1,
    name: "James Smith",
    gender: 1,
  },
  {
    id: 2,
    name: "Isla Brown",
    gender: 2,
  },
  {
    id: 3,
    name: "Amelia Davies",
    gender: 2,
  },
  {
    id: 4,
    name: "Jacob Evans",
    gender: 1,
  },
];

var target = document.querySelector("#target");
users.forEach((element) => {
  let a = document.createElement("li");

  if (element.gender == 1) {
    element.gender = "male";
  } else {
    element.gender = "female";
  }

  a.classList.add("user_item");
  a.innerHTML = `${element.id} - ${element.name} - ${element.gender}`;
  target.appendChild(a);
});
