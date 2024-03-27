function search() {
  let list = document.querySelectorAll("li");
  let input = document.querySelector("#searchText");
  let result = document.querySelector("#result");
  let count = 0;

  for (const item of list) {
    item.removeAttribute("style");
  }

  for (const item of list) {
    if (item.textContent.includes(input.value)) {
      item.style.textDecoration = "underline";
      item.style.fontWeight = "bold";
      count++;
    }
  }
  result.textContent = `${count} matches found`;
}
