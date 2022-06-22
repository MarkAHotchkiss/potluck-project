// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
//assignment button
const assignButton = document.querySelector(".assign");
//Items assigned
const assignedItems = document.querySelector(".assigned-items");

document.addEventListener("keydown", function (e) {
  //console.log(e);
  if (e.key === `Enter`) {
    const guest = guestInput.value;
    if (guest !== "") {
      clearInput();
      addToList(guest);
      updateGuestCount();
    }
  }
});

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  //console.log(guest);
  if (guest !== "") {
    clearInput();
    addToList(guest);
    updateGuestCount();
  }
});
// clearing the input box
const clearInput = function () {
  guestInput.value = "";
};
//creating the list of guests
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  //limiting the list to 12 people.
  if (guests.length === 12) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potluckItems = [
    "KFC 16 cnt.",
    "KFC 16 cnt.",
    "Potato Chips - 4 bags",
    "Baked Beans",
    "all condiments (katsup, mustard, mayo, etc.",
    "Bread, 4 loafs",
    "cold-cut meats (ham, beaf)",
    "Paper Plates/cups/towels/napkins, plastic forks/spoons/knives",
    "Soda-Pop, 6 - 2L bottls",
    "Potato salad",
    "Cake",
    "Pie",
    "Pie",
    "Banana Pudding"
  ];
  const allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];
    let listItem = document.createElement("li");

    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);

    potluckItems.splice(randomPotluckIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();

  assignButton.disabled = true;
});
