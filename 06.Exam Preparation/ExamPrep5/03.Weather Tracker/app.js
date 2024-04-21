window.addEventListener("load", solve);

function solve() {
  const API_URL = "http://localhost:3030/jsonstore/tasks/";
  const list = document.querySelector("#list");
  let location = document.querySelector("#location").value;

  const inputFields = {
    location: document.querySelector("#location"),
    temperature: document.querySelector("#temperature"),
    date: document.querySelector("#date"),
  };

  function getCurrWeatherForcast() {
    const currWeatherForcast = {
      location: inputFields.location.value,
      temperature: inputFields.temperature.value,
      date: inputFields.date.value,
    };

    return currWeatherForcast;
  }

  function attachEvents() {
    document
      .querySelector("#load-history")
      .addEventListener("click", loadHistory);
    document
      .querySelector("#add-weather")
      .addEventListener("click", addWeather);
    document
      .querySelector("#edit-weather")
      .addEventListener("click", commitChanges);
  }

  function clearAllSections() {
    list.innerHTML = "";
  }

  function clearInputFields() {
    Object.values(inputFields).forEach((input) => (input.value = ""));
  }

  async function getIdByName(task) {
    const res = await fetch(API_URL);
    const response = await res.json();
    return Object.entries(response).find((e) => e[1].location == task)[1]._id;
  }

  async function loadHistory() {
    clearAllSections();
    clearInputFields();
    try {
      const response = await fetch(API_URL);
      const weatherRecords = await response.json();

      Object.values(weatherRecords).forEach((weather) => {
        const container = createElement("div", list, "", "container", "");
        createElement("h2", container, weather.location, "", "");
        createElement("h3", container, weather.date, "", "");
        createElement("h3", container, weather.temperature, "", "celsius");

        const btnContainer = createElement(
          "div",
          container,
          "",
          "buttons-container",
          ""
        );
        const changeBtn = createElement(
          "button",
          btnContainer,
          "Change",
          "change-btn",
          ""
        );
        const deleteBtn = createElement(
          "button",
          btnContainer,
          "Delete",
          "delete-btn",
          ""
        );

        changeBtn.addEventListener("click", changeWeather);
        deleteBtn.addEventListener("click", deleteTask);
      });
    } catch (err) {
      console.error(err);
    }
  }

  function addWeather(event) {
    event.preventDefault();
    if (Object.values(inputFields).some((input) => input.value === "")) {
      return;
    }

    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(getCurrWeatherForcast()),
    })
      .then(loadHistory)
      .catch(console.error);

    // loadHistory();
    clearInputFields();
  }

  async function changeWeather(event) {
    const element = event.target.parentNode.parentNode;
    const parent = element.parentNode;

    parent.removeChild(element);

    location = element.querySelector("h2").textContent;
    inputFields.location.value = location;
    inputFields.temperature.value = element.querySelectorAll("h3")[1].innerHTML;
    inputFields.date.value = element.querySelectorAll("h3")[0].innerHTML;

    const editBtn = document.querySelector("#edit-weather");
    document.querySelector("#add-weather").disabled = true;
    editBtn.disabled = false;

    editBtn.addEventListener("click", commitChanges);
  }

  async function commitChanges(event) {
    const target = event.target.parentElement.parentElement;
    const task = Array.from(target.children)[1][0];
    // event.preventDefault();

    const id = await getIdByName(location);
    console.log(task.textContent);
    console.log(inputFields.location.value);

    fetch(API_URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        location: inputFields.location.value,
        temperature: inputFields.temperature.value,
        date: inputFields.date.value,
        _id: id,
      }),
    })
      .then(() => {
        loadHistory();
        clearInputFields();
      })
      .catch(console.error);

    document.querySelector("#add-weather").disabled = false;
    document.querySelector("#edit-weather").disabled = true;
  }

  async function deleteTask(event) {
    const target = event.target.parentElement.parentElement;
    const task = Array.from(target.children)[0];
    event.preventDefault();

    await getIdByName(task.textContent)
      .then((id) =>
        fetch(API_URL + id, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
      )
      .then(() => (id = ""))
      .catch(console.error);

    await loadHistory();
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

  attachEvents();
}
