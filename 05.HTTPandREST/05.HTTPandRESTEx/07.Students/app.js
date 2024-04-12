function attachEvents() {
  document.querySelector("#submit").addEventListener("click", submitStudent);
}

async function submitStudent() {
  const studentInfo = {
    firstName: document.querySelector('input[name="firstName"]'),
    lastName: document.querySelector('input[name="lastName"]'),
    facultyNumber: document.querySelector('input[name="facultyNumber"]'),
    grade: document.querySelector('input[name="grade"]'),
  };

  if (
    studentInfo.firstName === "" ||
    studentInfo.lastName === "" ||
    studentInfo.facultyNumber === "" ||
    studentInfo.grade === ""
  ) {
    return;
  }

  // console.log(studentInfo.firstName.value);

  const response = await fetch(
    "http://localhost:3030/jsonstore/collections/students",
    {
      method: "POST",
      body: JSON.stringify({
        firstName: studentInfo.firstName.value,
        lastName: studentInfo.lastName.value,
        facultyNumber: Number(studentInfo.facultyNumber.value),
        grade: Number(studentInfo.grade.value).toFixed(2),
      }),
    }
  );

  // const data = await response.json();

  studentInfo.firstName.value = "";
  studentInfo.lastName.value = "";
  studentInfo.facultyNumber.value = "";
  studentInfo.grade.value = "";

  loadStudents();
}

async function loadStudents() {
  const response = await fetch(
    "http://localhost:3030/jsonstore/collections/students"
  );
  const data = await response.json();

  if (!response.ok || response.status != 200) {
    throw new Error(data.message);
  }

  const bodyOfTable = document.querySelector("tbody");
  Object.values(data).forEach((info) => {
    let tableRow = createElement("tr", undefined, bodyOfTable);
    let firstNameTD = createElement("td", info.firstName, tableRow);
    let lastNameTD = createElement("td", info.lastName, tableRow);
    let facNumberTD = createElement("td", info.facultyNumber, tableRow);
    let gradeTD = createElement("td", info.grade, tableRow);
    bodyOfTable.appendChild(tableRow);
  });
}

function createElement(element, textCon, parent) {
  const currElement = document.createElement(element);

  if (textCon) {
    currElement.textContent = textCon;
  }
  if (parent) {
    parent.appendChild(currElement);
  }

  return currElement;
}

attachEvents();
