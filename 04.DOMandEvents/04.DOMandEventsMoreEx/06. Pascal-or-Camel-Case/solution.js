function solve() {
  let input = document.getElementById("text").value;
  let currentCase = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");

  if (currentCase === "Camel Case") {
    result.textContent = makeCamelCase(input);
  } else if (currentCase === "Pascal Case") {
    result.textContent = makePascalCase(input);
  } else {
    result.textContent = "Error!";
    return;
  }

  function makeCamelCase(input) {
    return input
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  }

  function makePascalCase(input) {
    return input
      .split(" ")
      .map((x) => x.toLowerCase())
      .map((x) => `${x.charAt(0).toLocaleUpperCase()}${x.slice(1)}`)
      .join("");
  }
}
