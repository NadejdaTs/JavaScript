function attachEvents() {
  document.querySelector("#btnLoad").addEventListener("click", loadPhone);
  document.querySelector("#btnCreate").addEventListener("click", createPhone);
}

async function loadPhone() {
  const phones = await (
    await fetch("http://localhost:3030/jsonstore/phonebook")
  ).json();

  const phonebook = document.querySelector("#phonebook");

  Object.values(phones).forEach((contact) => {
    const li = document.createElement("li");
    li.textContent = `${contact.person}: ${contact.phone}\n`;

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.setAttribute("id", contact._id);

    li.appendChild(button);
    phonebook.appendChild(li);

    button.addEventListener("click", deleteEntity);
  });
}

async function createPhone() {
  const [person, phone] = document.querySelectorAll("input[type=text]");

  if (person.value == "" || phone.value == "") {
    alert("Please fill the required fields!");
    return;
  }

  const response = await fetch("http://localhost:3030/jsonstore/phonebook", {
    method: "POST",
    body: JSON.stringify({
      person: `${person.value}`,
      phone: `${phone.value}`,
    }),
  });

  person.value = "";
  phone.value = "";

  loadPhone();

  console.log(response);
}

async function deleteEntity(event) {
  let targetId = event.target.getAttribute("id");
  const response = await fetch(
    `http://localhost:3030/jsonstore/phonebook/${targetId}`,
    {
      method: "delete",
    }
  );

  event.target.parentNode.remove();
}

attachEvents();
