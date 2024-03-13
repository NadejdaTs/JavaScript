function focused() {
  const inputs = Array.from(document.querySelectorAll("input"));

  inputs.forEach((input) => {
    input.addEventListener("focus", (e) => {
      console.log(e.target.parentElement.classList);
      e.target.parentElement.classList.add("focused");
    });
    input.addEventListener("blur", (e) => {
      e.target.parentElement.classList.remove("focused");
    });
  });
}
