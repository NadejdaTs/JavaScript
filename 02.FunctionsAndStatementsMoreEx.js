"use strict";

// 01
/*const carWash = {
  soap: (cleanPercentage) => cleanPercentage + 10,
  water: (cleanPercentage) => cleanPercentage + cleanPercentage * 0.2,
  "vacuum cleaner": (cleanPercentage) =>
    cleanPercentage + cleanPercentage * 0.25,
  mud: (cleanPercentage) => cleanPercentage - cleanPercentage * 0.1,
};

function solve(commands) {
  let cleanPercentage = 0;

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];
    // cleanPercentage += carWash[command];
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

// 02
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

// 03
/*function calculateDistance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function isDistanceValid(x1, y1, x2, y2) {
  const distance = calculateDistance(x1, y1, 0, 0);
  const isValid = Number.isInteger(distance);
  const status = isValid ? "valid" : "invalid";

  console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${status}.`);
}

function checkPointDistanceValidity(x1, y1, x2, y2) {
  isDistanceValid(x1, y1, 0, 0);
  isDistanceValid(x2, y2, 0, 0);
  isDistanceValid(x1, y1, x2, y2);
}
checkPointDistanceValidity(3, 0, 0, 4);
checkPointDistanceValidity(2, 1, 1, 1);*/

// 04
/*function washChunk(chunk) {
  console.log("Transporting and washing");
  return Math.floor(chunk);
}

function solve(input) {
  const [target, ...chunks] = input;

  const canCut = (chunk) => chunk / 4 >= target;
  const cut = (chunk) => chunk / 4;

  for (let chunk of chunks) {
    console.log(`Processing chunk ${chunk} microns`);
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

solve([1375, 50000]);
solve([1000, 4000, 8100]);*/

// 05
/*function printDNASequence(rows) {
  const pattern = [
    ["A", "T"],
    ["C", "G"],
    ["T", "T"],
    ["A", "G"],
    ["G", "G"],
  ];

  for (let i = 0; i < rows; i++) {
    const [x, y] = pattern[i % pattern.length];

    if (i % 4 === 0) {
      console.log(`**${x}${y}**`);
    } else if (i % 2 === 1) {
      console.log(`*${x}--${y}*`);
    } else if (i % 2 === 0) {
      console.log(`${x}----${y}`);
    }
  }
}

printDNASequence(10);*/
