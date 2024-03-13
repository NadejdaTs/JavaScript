function addItem() {
  const value = document.querySelector("#newItemText").value;
  //   Somethimes it can be dangerous way to create an element
  //   document.querySelector("ul").innerHTML += `<li>${value}</>`;
  const item = document.createElement("li");
  item.textContent = value;
  document.querySelector("ul").appendChild(item);
}
