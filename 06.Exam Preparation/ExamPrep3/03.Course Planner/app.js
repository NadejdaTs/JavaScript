attachEvents();
const API_URL = "http://localhost:3030/jsonstore/tasks/";
const inputFields = {
  title: document.querySelector("#course-name"),
  type: document.querySelector("#course-type"),
  description: document.querySelector("#description"),
  nameOfTeacher: document.querySelector("#teacher-name"),
};

function attachEvents() {
  document.querySelector("#add-course").addEventListener("click", addCourse);
  document.querySelector("#edit-course").addEventListener("click", editCourse);
  document.querySelector("#load-course").addEventListener("click", loadCourses);
}

async function loadCourses() {
  const response = await fetch(API_URL);
  const courses = await response.json();

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
  });
  //   editBtn.addEventListener("click", editCourse);
  //   finishBtn.addEventListener("click", finishCourse);
}
async function addCourse() {
  if (Object.values(inputFields).some((input) => input.value === "")) {
    return;
  }

  const currentCourse = {
    title: inputFields.title.value,
    course: inputFields.type.value,
    description: inputFields.description.value,
    teacher: inputFields.nameOfTeacher.value,
  };

  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(currentCourse),
  });

  loadCourses();
  Object.values(inputFields).forEach((input) => (input.value = ""));
}

function editCourse() {}

function finishCourse() {}

function createElement(element, parent, className, id, textContent) {
  const currElement = document.createElement(element);

  if (parent) {
    parent.appendChild(currElement);
  }

  if (className) {
    currElement.classList.add(className);
  }

  if (id) {
    currElement.setAtribute("id", id);
  }

  if (textContent) {
    currElement.textContent = textContent;
  }
  return currElement;
}
