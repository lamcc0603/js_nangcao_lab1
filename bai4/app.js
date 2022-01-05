const userList = [
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

function render() {
  userList.forEach((element) => {
    let liEle = document.createElement("li");
    liEle.classList.add("user_item");

    const gender = element.gender === 1 ? "male" : "female";
    liEle.innerHTML = `${element.id} - ${element.name} - ${gender}`;

    target.appendChild(liEle);
  });
}

const addUserID = document.querySelector("#addUserID");
const addUserText = document.querySelector("#addUserText");
const addUserGender = document.querySelector("#addUserGender");

const btn = document.querySelector("#addAction");
const target = document.querySelector("#target");

btn.addEventListener("click", () => {
  const user = {
    id: addUserID.value,
    name: addUserText.value,
    gender: Number(addUserGender.value),
  };
  // console.table(user);

  userList.push(user);

  // re-render
  target.innerHTML = "";
  render();
});

render();
