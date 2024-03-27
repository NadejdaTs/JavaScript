function validate() {
  const email = document.querySelector("#email");
  const pattern = /[a-z]+@[a-z]+.[a-z]+/g;

  email.addEventListener("change", function (event) {
    if (pattern.test(email.value)) {
      event.target.classList = "";
    } else {
      event.target.classList = "error";
    }
  });
}
