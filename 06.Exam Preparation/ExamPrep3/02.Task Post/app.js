window.addEventListener("load", solve);

function solve() {
  const tasks = {};
  const inputSelectors = {
    title: document.querySelector("#task-title"),
    category: document.querySelector("#task-category"),
    content: document.querySelector("#task-content"),
  };

  const selectors = {
    publishButton: document.querySelector("#publish-btn"),
    taskToReview: document.querySelector("#title-bar"),
    reviewList: document.querySelector("#review-list"),
  };

  selectors.publishButton.addEventListener("click", publishNewTask);

  function clearInputFields() {
    Object.values(inputSelectors).forEach((input) => {
      input.value = "";
    });
  }

  function editTask(buttonEdit) {
    console.log(buttonEdit);
  }

  function createElement(type, textContent, classes, id, parent, useInnerHTML) {
    const element = document.createElement(type);

    if (useInnerHTML && textContent) {
      element.innerHTML = textContent;
    } else if (textContent) {
      element.textContent = textContent;
    }

    if (classes && classes.length > 0) {
      element.classList.add(...classes);
    }

    if (id) {
      element.setAttribute("id", id);
    }

    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }
}
