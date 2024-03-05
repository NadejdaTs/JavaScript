"use strict";
// 01
/*const smallerNumber = (x, y) => (x < y ? x : y);

function findSmallestNumber(num1, num2, num3) {
  console.log(smallerNumber(smallerNumber(num1, num2), num3));
}
findSmallestNumber(600, 342, 123);*/

// 02
/*function sum(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function solve(x, y, z) {
  return subtract(sum(x, y), z);
}

console.log(solve(23, 6, 10));*/

// 03
/*function getAsciiSimbols(char1, char2) {
  let result = "";
  let start = char1.charCodeAt();
  let end = char2.charCodeAt();
  if (char1.charCodeAt() > char2.charCodeAt()) {
    start = char2.charCodeAt();
    end = char1.charCodeAt();
  }
  for (let i = start + 1; i < end; i++) {
    result += String.fromCharCode(i);
    if (i < end - 1) {
      result += " ";
    }
  }
  console.log(result);
}
getAsciiSimbols("a", "d");
getAsciiSimbols("#", ":");
getAsciiSimbols("C", "#");*/

// 04
/*let evenSum = 0;
let oddSum = 0;
const getSum = (num) => (num % 2 === 0 ? (evenSum += num) : (oddSum += num));
function oddAndEven(number) {
  while (number > 0) {
    let digit = number % 10;
    number = Math.floor(number / 10);
    getSum(digit);
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEven(1000435); 
// test indipendent
oddAndEven(3495892137259234);*/

// 05
/*function palindromeInt(array) {
  for (let i = 0; i < array.length; i++) {
    const numbers = String(array[i]).split("").map(Number);
    // const currIntArr = numbers[i];

    let isNotPalindrom = false;
    let lengthOfNum = Math.floor(numbers.length / 2);
    for (let j = 0; j < lengthOfNum; j++) {
      if (numbers[j] != numbers[numbers.length - 1 - j]) {
        isNotPalindrom = true;
      }
    }
    if (isNotPalindrom) {
      console.log("false");
    } else {
      console.log("true");
    }
  }
}
palindromeInt([123, 323, 421, 121]);
palindromeInt([32, 2, 232, 1010]);*/

// 06
/*function validatePassword(password) {
  const errors = [];
  if (password.length < 6 || password.length > 10) {
    errors.push("Password must be between 6 and 10 characters");
  }
  if (!password.match("^[A-Za-z0-9]+$")) {
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

validatePassword("logIn");
validatePassword("MyPass123");
validatePassword("Pa$s$s");*/

// 07
/*function nxnMatrix(n) {
  for (let i = 0; i < n; i++) {
    let resultString = "";
    for (let j = 0; j < n; j++) {
      resultString += n + " ";
    }
    console.log(resultString);
    console.log();
  }
}
nxnMatrix(7);*/

// 08
/*function perfectNumber(num) {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  return sum === num ? "We have a perfect number" : "It's not so perfect";
}

console.log(perfectNumber(28));
console.log(perfectNumber(1236498));*/

// 09
/*function printLoadingBar(percentage) {
  const percentageNumber = percentage / 10;
  const bar = "%".repeat(percentageNumber) + ".".repeat(10 - percentageNumber);

  if (percentage === 100) {
    console.log("100% Complete");
    console.log(`[${bar}]`);
  } else {
    console.log(`${percentage} ${bar}`);
    console.log("Still loading");
  }
}

printLoadingBar(50);*/

// 10
/*function calculateFactorial(num) {
  let sum = 1;

  for (let i = 1; i <= num; i++) {
    sum *= i;
  }

  return sum;
}

function solve(x, y) {
  return (calculateFactorial(x) / calculateFactorial(y)).toFixed(2);
}

console.log(solve(5, 2));
console.log(solve(6, 2));*/
