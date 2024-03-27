function calc() {
  const firsstInput = document.getElementById("num1");
  const secondInput = document.getElementById("num2");

  const sum = Number(firsstInput.value) + Number(secondInput.value);

  document.getElementById("sum").value = sum;

  const test = document.querySelector("#test");
  test.innerHTML += "<input />";
}
