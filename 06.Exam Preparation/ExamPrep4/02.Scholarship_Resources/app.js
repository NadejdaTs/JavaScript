window.addEventListener("load", solve);

function solve() {
  const inputFields = {
    studentName: document.querySelector("#student"),
    university: document.querySelector("#university"),
    score: document.querySelector("#score"),
    form: document.querySelector("form"),
  };

  const selectors = {
    nextBtn: document.querySelector("#next-btn"),
    previewList: document.querySelector("#preview-list"),
    candidates: document.querySelector("#candidates-list"),
  };
  selectors.nextBtn.addEventListener("click", goToPreview);

  function goToPreview() {
    if (
      inputFields.studentName.value == "" ||
      inputFields.university.value == "" ||
      inputFields.score.value == ""
    ) {
      return;
    }

    let liElement = document.createElement("li");
    liElement.classList.add("application");

    let article = document.createElement("article");
    let studentNameHeading = document.createElement("h4");
    studentNameHeading.textContent = inputFields.studentName.value;
    console.log(studentNameHeading);
    console.log(inputFields.studentName.value);

    let universityParagraph = document.createElement("p");
    universityParagraph.textContent =
      "University: " + inputFields.university.value;

    let scoreParagraph = document.createElement("p");
    scoreParagraph.textContent = "Score: " + inputFields.score.value;

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("action-btn");
    editBtn.classList.add("edit");

    let applyBtn = document.createElement("button");
    applyBtn.textContent = "Apply";
    applyBtn.classList.add("action-btn");
    applyBtn.classList.add("apply");

    article.appendChild(studentNameHeading);
    article.appendChild(universityParagraph);
    article.appendChild(scoreParagraph);
    liElement.appendChild(article);
    liElement.appendChild(editBtn);
    liElement.appendChild(applyBtn);

    selectors.previewList.appendChild(liElement);

    clearInputFields();

    editBtn.addEventListener("click", editStudentInfo);
    applyBtn.addEventListener("click", applyStudentInfo);

    function editStudentInfo() {
      selectors.previewList.removeChild(liElement);
      inputFields.studentName.value = studentNameHeading.textContent;
      inputFields.university.value =
        universityParagraph.textContent.substring(12);
      inputFields.score.value = scoreParagraph.textContent.substring(7);
    }

    function applyStudentInfo() {
      liElement.removeChild(editBtn);
      liElement.removeChild(applyBtn);
      selectors.previewList.removeChild(liElement);
      selectors.candidates.appendChild(liElement);
    }

    function clearInputFields() {
      Object.values(inputFields).forEach((input) => {
        input.value = "";
      });
    }
  }
}
