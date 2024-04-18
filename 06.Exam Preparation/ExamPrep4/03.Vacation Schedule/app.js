attachEvents();
const API_URL = "http://localhost:3030/jsonstore/tasks/";

let inputFields = {
  name: document.querySelector("#name"),
  days: document.querySelector("#num-days"),
  date: document.querySelector("#from-date"),
};

function attachEvents() {
  document
    .querySelector("#load-vacations")
    .addEventListener("click", loadVacations);
  document
    .querySelector("#add-vacation")
    .addEventListener("click", addVacations);
}

function clearInputFields() {
  Object.values(inputFields).forEach((input) => (input.value = ""));
}

function clearAllSections() {
  document.getElementById("list").innerHTML = "";
}

function getIdByName(vacationName) {
  return fetch(API_URL)
    .then((res) => res.json())
    .then(
      (res) => Object.entries(res).find((e) => e[1].name == vacationName)[1]._id
    );
}

async function loadVacations() {
  clearAllSections();
  const vacations = await (await fetch(API_URL)).json();

  const list = document.querySelector("#list");
  Object.values(vacations).forEach((vacation) => {
    const container = createElement("div", list, "", "container", "");
    createElement("h2", container, vacation.name);
    createElement("h3", container, vacation.date);
    createElement("h3", container, vacation.days);
    const changeBtn = createElement(
      "button",
      container,
      "Change",
      "change-btn"
    );
    const doneBtn = createElement("button", container, "Done", "done-btn");

    changeBtn.addEventListener("click", changeVacation);
    doneBtn.addEventListener("click", doneVacation);
  });

  document.querySelector("#edit-vacation").style.disabled = true;
}

async function addVacations(event) {
  event.preventDefault();
  if (Object.values(inputFields).some((input) => input.value === "")) {
    return;
  }

  const currentVacation = {
    name: inputFields.name.value,
    days: inputFields.days.value,
    date: inputFields.date.value,
  };

  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(currentVacation),
  });

  fetch(API_URL).then(loadVacations()).catch(console.error);
  clearInputFields();
}

async function changeVacation(event) {
  const element = event.target.parentNode;
  const parent = element.parentNode;

  inputFields.name.value = element.querySelector("h2").textContent;
  inputFields.days.value = element.querySelectorAll("h3")[1].innerHTML;
  inputFields.date.value = element.querySelectorAll("h3")[0].innerHTML;

  parent.removeChild(element);
  document.querySelector("#add-vacation").disabled = true;
  const editBtn = document.querySelector("#edit-vacation");
  editBtn.disabled = false;

  editBtn.addEventListener("click", commitChanges);
}

async function commitChanges(event) {
  const target = event.target.parentElement;
  const task = Array.from(target.children)[1];
  event.preventDefault();

  const id = await getIdByName(task.value);

  await fetch(API_URL + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: inputFields.name.value,
      days: inputFields.days.value,
      date: inputFields.date.value,
      _id: id,
    }),
  });

  document.querySelector("#add-vacation").disabled = false;
  document.querySelector("#edit-vacation").disabled = true;

  await loadVacations();
  //   await fetch(API_URL).then(loadVacations()).catch(console.error);
  clearInputFields();
}

async function doneVacation(event) {
  const target = event.target.parentElement;
  const task = Array.from(target.children)[0];

  getIdByName(task.textContent).then((id) =>
    fetch(API_URL + id, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
  );

  fetch(API_URL).then(loadVacations()).catch(console.error);
}

function createElement(type, parent, textContent, classes, id) {
  const element = document.createElement(type);

  if (textContent) {
    element.textContent = textContent;
  }

  if (classes) {
    element.classList.add(classes);
  }

  if (id) {
    element.setAttribute("id", id);
  }

  if (parent) {
    parent.appendChild(element);
  }
  return element;
}
