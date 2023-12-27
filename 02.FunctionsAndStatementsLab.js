"use strict";

/*function solve(text) {
  const result = text
    .split(/[\W]+/)
    .filter((w) => w.length > 1)
    .map((w) => w.toUpperCase())
    .join(", ");
  console.log(result);
}

solve("Hi, how are you?");*/

/*const calculator = {
  multiply: (x, y) => x * y,
  devide: (x, y) => x / y,
  sum: (x, y) => x + y,
  subtract: (x, y) => x - y,
};

const caclulate = (num1, num2, operator) =>
  calculator[operator] ? calculator[operator](num1, num2) : 0;

console.log(caclulate(5, 5, "multiply"));*/

/*function greet(getMessage, name) {
  return getMessage() + " " + name;
}

function getGreetingBasedOnHour() {
  const currentHour = new Date().getHours();

  if (currentHour >= 20) {
    return "Good evening";
  }
  if (currentHour >= 12) {
    return "Good day";
  }
  return "Good morning";
}
const greeting = greet(getGreetingBasedOnHour, ", Alex :)");
console.log(greeting);*/

/*function validatePassword(password) {
  const errors = [];
  if (password.length < 6 || password.length > 10) {
    errors.push("Password must be between 6 and 10 characters");
  }
  if (!password.match("[A-Za-z0-9]+$")) {
    errors.push("Password must consist only of letters and digits");
  }

  const digitCount = password.match(/\d/g);

  if (!digitCount || digitCount.length < 2) {
    errors.push("Password must have at least 2 digits");
  }

  if (errors.length > 0) {
    console.log(errors.join("\n"));
    return;
  }
  console.log("Password is valid");
}

validatePassword("logIn12");*/
