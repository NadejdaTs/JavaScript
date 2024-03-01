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
function oddAndEven() {}

// Perfect Number
/*function perfectNumber(num) {
  let sum = 0;

  for (let index = 1; index < num; index++) {
    if (num % index === 0) {
      sum += index;
    }
  }

  return sum === num ? "We have a perfect number" : "It's not so perfect";
}

console.log(perfectNumber(6));*/

// Loading Bar
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

// Factorial Sum
/*function calculateFactorial(num) {
  let sum = 1;

  for (let index = 1; index <= num; index++) {
    sum *= index;
  }

  return sum;
}

function solve(x, y) {
  return (calculateFactorial(x) / calculateFactorial(y)).toFixed(2);
}

console.log(solve(5, 2));*/

// Car Wash
/*const carWash = {
  soap: (cleanPercentage) => cleanPercentage + 10,
  water: (cleanPercentage) => cleanPercentage + cleanPercentage * 0.2,
  "vacuum cleaner": (cleanPercentage) =>
    cleanPercentage + cleanPercentage * 0.25,
  mud: (cleanPercentage) => cleanPercentage - cle,
};

function solve(commands) {
  let cleanPercentage = 0;

  for (let index = 0; index < commands.length; index++) {
    const command = commands[index];

    if (command === "soap") {
      cleanPercentage += 10;
    } else if (command === "water") {
      cleanPercentage += cleanPercentage * 0.2;
    } else if (command === "vacuum cleaner") {
      cleanPercentage += cleanPercentage * 0.25;
    } else if (command === "mud") {
      cleanPercentage -= cleanPercentage * 0.1;
    }
  }

  return `The car is ${cleanPercentage.toFixed(2)} clean`;
}

console.log(solve(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]));*/

// Number Modification
/*function calculateAverage(num) {
  return (
    num
      .split("")
      .map(Number)
      .reduce((total, curr) => total + curr, 0) / num.length
  );
}

function solve(num) {
  num = num.toString();
  let average = calculateAverage(num);

  while (average < 5) {
    num += "9";
    average = calculateAverage(num);
  }

  return num;
}

console.log(solve(101));
console.log(solve(5835));*/

// Radio Crystals
/*function washChunk(chunk) {
  console.log("Transporting and washing");
  return Math.floor(chunk);
}

function solve(input) {
  const [target, ...chunks] = input;

  const canCut = (chunk) => chunk / 4 >= target;
  const cut = (chunk) => chunk / 4;

  for (let chunk of chunks) {
    while (chunk > target) {
      // Cut...
      if (canCut(chunk)) {
        let counter = 0;

        while (canCut(chunk)) {
          chunk = cut(chunk);
          counter++;
        }

        console.log(`Cut x${counter}`);
        chunk = washChunk(chunk);
      }

      // Lap...
      if (chunk - chunk * 0.2 >= target) {
        let counter = 0;

        while (chunk - chunk * 0.2 >= target) {
          chunk -= chunk * 0.2;
          counter++;
        }

        console.log(`Lap x${counter}`);
        chunk = washChunk(chunk);
      }

      // Grind...
      if (chunk - 20 >= target) {
        let counter = 0;

        while (chunk - 20 >= target) {
          chunk -= 20;
          counter++;
        }

        console.log(`Grind x${counter}`);
        chunk = washChunk(chunk);
      }

      // Etch...
      if (chunk - 2 >= target - 1) {
        let counter = 0;

        while (chunk - 2 >= target - 1) {
          chunk -= 2;
          counter++;
        }

        console.log(`Etch x${counter}`);
        chunk = washChunk(chunk);
      }
    }

    if (chunk + 1 === target) {
      chunk += 1;
      console.log("X-ray x1");
    }

    console.log(`Finished crystal ${target} microns`);
  }
}

solve([1375, 50000]);*/

// DNA Sequence
/*function printDNASequence(rows) {
  const pattern = [
    ["A", "T"],
    ["C", "G"],
    ["T", "T"],
    ["A", "G"],
    ["G", "G"],
  ];

  for (let index = 0; index < rows; index++) {
    const [x, y] = pattern[index % pattern.length];

    if (index % 4 === 0) {
      console.log(`**${x}${y}**`);
    } else if (index % 2 === 1) {
      console.log(`*${x}--${y}*`);
    } else if (index % 2 === 0) {
      console.log(`${x}----${y}`);
    }
  }
}

printDNASequence(10);*/
