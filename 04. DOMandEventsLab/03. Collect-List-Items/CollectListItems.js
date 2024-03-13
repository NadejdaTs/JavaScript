function extractText() {
  const listItems = Array.from(document.querySelectorAll("li"));
  //   console.log(listItems);
  const text = listItems.map((item) => item.textContent).join("\n");
  //   console.log(text);
  document.querySelector("textarea").value = text;
}
