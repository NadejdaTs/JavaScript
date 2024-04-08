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
    publishList: document.querySelector("#published-list"),
  };

  selectors.publishButton.addEventListener("click", publishNewTask);

  function publishNewTask() {
    const task = {
      id: `task-${Object.values(tasks).length + 1}`,
      title: inputSelectors.title.value,
      category: inputSelectors.category.value,
      content: inputSelectors.content.value,
    };

    if (task.title != "" && task.category != "" && task.content != "") {
      tasks[task.id] = task;
      const li = createElement("li", null, ["rpost"], null);
      const article = createElement("article", null, null, null);

      const h4 = createElement("h4", task.title, null, null, article);
      const p1 = createElement("p", task.category, null, null, article);
      const p2 = createElement("p", task.content, null, null, article);
      li.appendChild(article);

      const taskEdit = createElement(
        "button",
        "Edit",
        ["action-btn"],
        null,
        li
      );
      const taskPost = createElement(
        "button",
        "Post",
        ["action-btn"],
        null,
        li
      );

      taskEdit.classList.add("edit");
      taskPost.classList.add("post");
      li.appendChild(taskEdit);
      li.appendChild(taskPost);
      selectors.reviewList.appendChild(li);
      selectors.publishButton.disabled = true;

      clearInputFields();

      const editButton = document.querySelector(".edit");
      editButton.addEventListener("click", edit);

      const postButton = document.querySelector(".post");
      postButton.addEventListener("click", postFn);

      function edit() {
        inputSelectors.title.value = h4.textContent;
        inputSelectors.category.value = p1.textContent;
        inputSelectors.content.value = p2.textContent;
        selectors.reviewList.removeChild(li);
        selectors.publishButton.disabled = false;
      }

      function postFn() {
        li.removeChild(editButton);
        li.removeChild(postButton);
        selectors.reviewList.removeChild(li);
        selectors.publishList.appendChild(li);
        selectors.publishButton.disabled = false;
      }
    }
  }

  function clearInputFields() {
    Object.values(inputSelectors).forEach((input) => {
      input.value = "";
    });
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
