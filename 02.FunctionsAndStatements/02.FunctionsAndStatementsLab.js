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

// 01
/*function formatGrade(grade) {
  if (grade < 3.0) {
    console.log("Fail (2)");
  } else if (grade >= 3 && grade < 3.5) {
    console.log(`Poor (${grade.toFixed(2)})`);
  } else if (grade >= 3.5 && grade < 4.5) {
    console.log(`Good (${grade.toFixed(2)})`);
  } else if (grade >= 4.5 && grade < 5.5) {
    console.log(`Veryy good (${grade.toFixed(2)})`);
  } else if (grade >= 5.5) {
    console.log(`Excellent (${grade.toFixed(2)})`);
  }
}
formatGrade(3.33);
formatGrade(4.5);
formatGrade(2.99);*/

// 02
/*function mathPower(number, power) {
  console.log(number ** power);
}
mathPower(2, 8);
mathPower(3, 4);*/

// 03
/*function repeatString(text, repeat) {
  let result = "";
  for (let i = 0; i < repeat; i++) {
    result += text;
  }
  console.log(result);
}
repeatString("abc", 3);
repeatString("String", 2);*/

// 04
/*const orderPrice = {
  coffee: (x) => (x * 1.5).toFixed(2),
  water: (x) => (x * 1.0).toFixed(2),
  coke: (x) => (x * 1.4).toFixed(2),
  shacks: (x) => (x * 2.0).toFixed(2),
};
const orders = (order, quantity) =>
  orderPrice[order] ? orderPrice[order](quantity) : "none";

console.log(orders("water", 5));
console.log(orders("coffee", 2));*/

// 05
/*const calculator = {
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
};

const caclulate = (num1, num2, operator) =>
  calculator[operator] ? calculator[operator](num1, num2) : 0;

console.log(caclulate(5, 5, "multiply"));
console.log(caclulate(40, 8, "divide"));*/

// 06
/*function isPositive(x) {
  if (x > 0) {
    return "+";
  } else {
    return "-";
  }
}

function signCheck(num1, num2, num3) {
  if (
    isPositive(num1) === "+" &&
    isPositive(num2) === "+" &&
    isPositive(num3) === "+"
  ) {
    console.log("Positive");
  } else if (
    isPositive(num1) === "-" &&
    isPositive(num2) === "-" &&
    isPositive(num3) === "-"
  ) {
    console.log("Negative");
  } else if (
    (isPositive(num1) === "-" &&
      isPositive(num2) === "-" &&
      isPositive(num3) === "+") ||
    (isPositive(num1) === "-" &&
      isPositive(num2) === "+" &&
      isPositive(num3) === "-") ||
    (isPositive(num1) === "+" &&
      isPositive(num2) === "-" &&
      isPositive(num3) === "-")
  ) {
    console.log("Positive");
  } else if (
    (isPositive(num1) === "-" &&
      isPositive(num2) === "+" &&
      isPositive(num3) === "+") ||
    (isPositive(num1) === "+" &&
      isPositive(num2) === "-" &&
      isPositive(num3) === "+") ||
    (isPositive(num1) === "+" &&
      isPositive(num2) === "+" &&
      isPositive(num3) === "-")
  ) {
    console.log("Negative");
  }
}
signCheck(5, 12, -15);
signCheck(-6, -12, 1);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);*/

// Lab 01
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
