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

  function publishNewTask() {
    const task = {
      id: `task-${Object.values(tasks).length + 1}`,
      title: inputSelectors.title.value,
      category: inputSelectors.category.value,
      content: inputSelectors.content.value,
    };
    tasks[task.id] = task;
    const li = createElement("li", null, ["rpost"], null);
    const article = createElement("article", null, null, null);

    createElement("h4", task.title, null, null, article);
    createElement("p", task.category, null, null, article);
    createElement("p", task.content, null, null, article);
    li.appendChild(article);

    const taskEdit = createElement("button", "Edit", ["action-btn"], null, li);
    const taskPost = createElement("button", "Post", ["action-btn"], null, li);

    taskEdit.classList.add("edit");
    taskEdit.classList.add("post");
    li.appendChild(taskEdit);
    li.appendChild(taskPost);
    selectors.reviewList.appendChild(li);

    clearInputFields();
  }

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
