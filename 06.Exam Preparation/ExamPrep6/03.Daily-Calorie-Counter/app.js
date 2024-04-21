window.addEventListener("load", solve);

function solve() {
  const API_URL = "http://localhost:3030/jsonstore/tasks/";
  let list = document.querySelector("#list");
  let addBtn = document.querySelector("#add-meal");
  let editBtn = document.querySelector("#edit-meal");
  let foodName = document.querySelector("#food");

  const inputFields = {
    food: document.querySelector("#food"),
    time: document.querySelector("#time"),
    calories: document.querySelector("#calories"),
  };

  function atachEventListener() {
    addBtn.addEventListener("click", addMeal);
    document.querySelector("#load-meals").addEventListener("click", loadMeals);
  }

  function clearAllFields() {
    Object.values(inputFields).forEach((input) => (input.value = ""));
  }

  function clearAllSection() {
    list.innerHTML = "";
  }

  async function getIdByName(task) {
    const response = await (await fetch(API_URL)).json();
    return Object.entries(response).find((e) => e[1].food == task)[1]._id;
  }

  async function loadMeals() {
    clearAllFields();
    clearAllSection();
    const allMeals = await (await fetch(API_URL)).json();

    Object.values(allMeals).forEach((meal) => {
      const divMeal = createElement("div", list, "", "meal", "");
      createElement("h2", divMeal, meal.food, "", "");
      createElement("h3", divMeal, meal.time, "", "");
      createElement("h3", divMeal, meal.calories, "", "");
      const innerDiv = createElement("div", divMeal, "", "", "meal-buttons");

      const changeBtn = createElement(
        "button",
        innerDiv,
        "Change",
        "change-meal",
        ""
      );
      const deleteBtn = createElement(
        "button",
        innerDiv,
        "Delete",
        "delete-meal",
        ""
      );

      changeBtn.addEventListener("click", changeMeal);
      deleteBtn.addEventListener("click", deleteMeal);
    });
  }

  async function addMeal(event) {
    event.preventDefault();

    if (Object.values(inputFields).some((input) => input.value === "")) {
      return;
    }

    const currentMeal = {
      food: inputFields.food.value,
      time: inputFields.time.value,
      calories: inputFields.calories.value,
    };

    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(currentMeal),
    })
      .then(loadMeals)
      .catch(console.error);

    clearAllFields();
  }

  function changeMeal(event) {
    const element = event.target.parentNode.parentNode;
    const parent = element.parentNode;

    parent.removeChild(element);

    foodName = element.querySelector(".meal h2").textContent;
    inputFields.food.value = foodName;
    inputFields.time.value = element.querySelectorAll("h3")[0].innerHTML;
    inputFields.calories.value = element.querySelectorAll("h3")[1].innerHTML;

    addBtn.disabled = true;
    editBtn.disabled = false;
    editBtn.addEventListener("click", commitChanges);
  }

  async function commitChanges(event) {
    await getIdByName(foodName).then((id) => {
      fetch(API_URL + id, {
        method: "PUT",
        body: JSON.stringify({
          food: inputFields.food.value,
          time: inputFields.time.value,
          calories: inputFields.calories.value,
          _id: id,
        }),
      })
        .then(loadMeals)
        .catch(console.error);
    });

    addBtn.disabled = false;
    editBtn.disabled = true;
  }

  async function deleteMeal(event) {
    const target = event.target.parentElement.parentElement;
    const task = Array.from(target.children)[0];

    event.preventDefault();

    await getIdByName(task.textContent).then((id) => {
      fetch(API_URL + id, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then(loadMeals)
        .catch(console.error);
    });
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

  atachEventListener();
}
