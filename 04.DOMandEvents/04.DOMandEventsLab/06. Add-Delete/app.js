function addItem() {
  const value = document.querySelector("#newItemText").value;
  const item = createLitItem(value);
  document.querySelector("ul").appendChild(item);
  document.querySelector("#newItemText").value = "";
}

function createLitItem(text) {
  const item = document.createElement("li");
  item.textContent = text;
  item.appendChild(createDeleteButton());
  return item;
}

function createDeleteButton() {
  const deleteButton = document.createElement("a");
  deleteButton.href = "#";
  deleteButton.textContent = "[Delete]";
  deleteButton.addEventListener("click", (event) => {
    // console.log(event);
    event.target.parentElement.remove();
  });

  return deleteButton;
}
