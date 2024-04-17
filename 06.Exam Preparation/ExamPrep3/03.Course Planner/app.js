attachEvents();
const API_URL = "http://localhost:3030/jsonstore/tasks/";
const inputFields = {
  title: document.querySelector("#course-name"),
  type: document.querySelector("#course-type"),
  description: document.querySelector("#description"),
  nameOfTeacher: document.querySelector("#teacher-name"),
};
let courses = {};
let courseIds = [];

function attachEvents() {
  document.querySelector("#add-course").addEventListener("click", addCourse);
  document.querySelector("#load-course").addEventListener("click", loadCourses);
}

function getIdByName(course) {
  return fetch(API_URL)
    .then((res) => res.json())
    .then(
      (res) => Object.entries(res).find((e) => e[1].title == course)[1]._id
    );
}

function clearAllSections() {
  document.getElementById("list").innerHTML = "";
}

async function loadCourses() {
  clearAllSections();
  const courses = await (await fetch(API_URL)).json();

  const div = document.querySelector("#list");

  Object.values(courses).forEach((course) => {
    const container = createElement("div", div, "container", "", "");
    createElement("h2", container, "", "", course.title);
    createElement("h3", container, "", "", course.teacher);
    createElement("h3", container, "", "", course.type);

    createElement("h4", container, "", "", course.description);
    const editBtn = createElement(
      "button",
      container,
      "edit-btn",
      "",
      "Edit Course"
    );
    // editBtn.disabled = false;
    const finishBtn = createElement(
      "button",
      container,
      "finish-btn",
      "",
      "Finish Course"
    );

    editBtn.addEventListener("click", editCourse);
    finishBtn.addEventListener("click", finishCourse);
  });
}
async function addCourse() {
  if (Object.values(inputFields).some((input) => input.value === "")) {
    return;
  }

  // clearAllSections();

  const currentCourse = {
    title: inputFields.title.value,
    type: inputFields.type.value,
    description: inputFields.description.value,
    teacher: inputFields.nameOfTeacher.value,
  };

  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(currentCourse),
  });

  // clearAllSections();
  loadCourses();
  Object.values(inputFields).forEach((input) => (input.value = ""));
}

async function editCourse(e) {
  const element = e.target.parentNode;
  const parent = element.parentNode;

  inputFields.title.value = element.querySelector("h2").textContent;
  inputFields.type.value = element.querySelectorAll("h3")[1].innerHTML;
  inputFields.description.value = element.querySelector("h4").textContent;
  inputFields.nameOfTeacher.value = element.querySelectorAll("h3")[0].innerHTML;

  parent.removeChild(element);
  document.querySelector("#add-course").disabled = true;
  const editBtn = document.querySelector("#edit-course");
  editBtn.disabled = false;

  loadCourses();
  editBtn.addEventListener("click", commitChanges);
}

function finishCourse(event) {
  const target = event.target.parentElement;
  const task = Array.from(target.children)[0];

  clearAllSections();
  getIdByName(task.textContent)
    .then((id) =>
      fetch(API_URL + id, {
        method: "DELETE",
      })
    )
    .then(loadCourses);
}

async function commitChanges(event) {
  const target = event.target.parentElement;
  const task = Array.from(target.children)[1];

  clearAllSections();
  getIdByName(task.value)
    .then((id) =>
      fetch(API_URL + id, {
        method: "PUT",
        body: JSON.stringify({
          title: inputFields.title.value,
          type: inputFields.type.value,
          description: inputFields.description.value,
          teacher: inputFields.nameOfTeacher.value,
          _id: id,
        }),
      })
    )
    .then(loadCourses);
  Object.values(inputFields).forEach((input) => (input.value = ""));
}

function createElement(element, parent, className, id, textContent) {
  const currElement = document.createElement(element);

  if (className) {
    currElement.classList.add(className);
  }

  if (id) {
    currElement.setAttribute("id", id);
  }

  if (textContent) {
    currElement.textContent = textContent;
  }

  if (parent) {
    parent.appendChild(currElement);
  }
  return currElement;
}
