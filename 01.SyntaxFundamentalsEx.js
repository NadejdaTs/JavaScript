/*function solve(age) {
  if (age >= 66) {
    console.log("elder");
  } else if (age >= 20) {
    console.log("adult");
  } else if (age >= 14) {
    console.log("teenager");
  } else if (age >= 3) {
    console.log("child");
  } else if (age >= 0) {
    console.log("baby");
  } else {
    console.log("out of bounds");
  }
}
solve(20);*/

// First way
/*function solve(count, type, day) {
  let sum = 0;
  if (type === "Students") {
    if (day === "Friday") {
      sum = count * 8.45;
    } else if (day === "Saturday") {
      sum = count * 9.8;
    } else if (day === "Sunday") {
      sum = count * 10.46;
    }
    if (count >= 30) {
      sum -= sum * 0.15;
    }
  } else if ((type = "Business")) {
    if (count >= 100) {
      count -= 10;
    }
    if (day === "Friday") {
      sum = count * 10.9;
    } else if (day === "Saturday") {
      sum = count * 15.6;
    } else if (day === "Sunday") {
      sum = count * 16;
    }
  } else if ((type = "Regular")) {
    if (day === "Friday") {
      sum = count * 15;
    } else if (day === "Saturday") {
      sum = count * 20;
    } else if (day === "Sunday") {
      sum = count * 22.5;
    }
    if (count >= 10 && count <= 20) {
      sum -= sum * 0.05;
    }
  }
  console.log(`Total price: ${sum.toFixed(2)}`);
}
solve(30, "Students", "Sunday");*/

// Second way
// TODO
/*function solve(count, type, day) {
  const prices = {
    Students: {
      Friday: 8.45,
      Saturday: 9.8,
      Sunday: 10.46,
    },
  };
  let sum = 0;
  const cost = prices[type][day];
  sum = count * cost;
  // console.log(cost);
  if (type === "Students" && count >= 30) {
    sum -= sum * 0.15;
  }

  console.log(`Total price: ${sum.toFixed(2)}`);
}
solve(30, "Students", "Sunday");*/

/*function solve(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    console.log("yes");
  } else if (year % 400 === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

solve(1984);*/

/*function solve(start, end) {
  const numbers = [];
  let sum = 0;

  for (let index = start; index <= end; index++) {
    numbers.push(index);
    sum += index;
  }
  console.log(numbers.join(" ").trim());
  console.log(`Sum: ${sum}`);
}
solve(0, 26);*/

/*function solve(number) {
  for (let index = 1; index <= 10; index++) {
    console.log(`${number} X ${index} = ${number * index}`);
  }
}

solve(5);*/

/*function solve(number) {
  const digitsString = number.toString();
  let sum = 0;
  for (let index = 0; index < digitsString.length; index++) {
    sum += Number(digitsString[index]);
  }
  console.log(sum);
}
solve(245678);*/

/*function solve(a, b, c) {
  console.log(`${a}${b}${c}`);
}
solve("a", "b", "c");*/

/*function solve(a, b, c) {
  console.log(`${c} ${b} ${a}`);
}
solve("a", "b", "c");*/

/*function calculateFruitPrice(fruit, weightInGrams, pricePerKilogram) {
  const weightInKilograms = (weightInGrams / 1000).toFixed(2);
  const totalPrice = (weightInKilograms * pricePerKilogram).toFixed(2);

  console.log(
    `I need $${totalPrice} to buy ${weightInKilograms} kilograms ${fruit}`
  );
}
calculateFruitPrice("orange", 2500, 1.8);*/

/*"use strict";

function checkIfAllDigitsAreSame(number) {
  const digitsString = number.toString();
  let isConsistent = false;

  for (let index = 1; index < digitsString.length; index++) {
    if (digitsString[index] !== digitsString[index - 1]) {
      isConsistent = true;
    }
  }
  console.log(isConsistent);
}
checkIfAllDigitsAreSame(22222);*/

/*"use strict";
function checkIfAllDigitsAreSame(number) {
  const digits = Array.from(String(number), Number);
  const isConsistent = new Set(digits).size === 1;
  const sum = digits.reduce(function (total, number) {
    return total + number;
  }, 0);

  console.log(digits);
  console.log(isConsistent);
  console.log(sum);
}
checkIfAllDigitsAreSame(22222);*/

/*function chackSpeeding(speed, area) {
  const speedLimits = {
    motorway: 130,
    interstate: 90,
    city: 50,
    resdential: 20,
  };

  const currentSpeedLimit = speedLimits[area];
  // console.log(currentSpeedLimit);
  const speedOverLimit = speed - currentSpeedLimit;

  if (speedOverLimit <= 0) {
    console.log(`Driving ${speed} km/h in a ${currentSpeedLimit} zone`);
    return;
  }

  const speedingMessage =
    speedOverLimit <= 20
      ? "speeding"
      : speedOverLimit <= 40
      ? "excessive speeding"
      : "reckless driving";
  console.log(
    `The speed is ${speedOverLimit} km/h faster than the allowed speed of ${currentSpeedLimit} - ${speedingMessage}`
  );
}
chackSpeeding(40, "city");
chackSpeeding(200, "motorway");*/

"use strict";
/*function cookNumber(number, ...commands) {
  let sum = Number(number);

  for (let index = 0; index < commands.length; index++) {
    const command = commands[index];
    // console.log(command);
    switch (command) {
      case "chop":
        sum = sum / 2;
        break;
      case "dice":
        sum = Math.sqrt(sum);
        break;
      case "spice":
        sum += 1;
        break;
      case "bake":
        sum *= 3;
        break;
      case "fillet":
        sum -= sum * 0.2;
        break;
    }
    console.log(sum);
  }
}
cookNumber("9", "dice");*/

/*function rotateArray(arr, rotationCount) {
  for (let index = 0; index < rotationCount; index++) {
    const firstElement = arr.shift();
    arr.push(firstElement);
  }
  console.log(arr);
}

rotateArray([51, 47, 32, 61, 21], 2);*/

/*function sortList(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  const resultArray = [];
  const length = arr.length;

  for (let index = 0; index < length; index++) {
    if (index % 2 === 0) {
      resultArray.push(sortedArray.shift());
    } else {
      resultArray.push(sortedArray.pop());
    }
  }
  console.log(resultArray);
}
sortList([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);*/

"use strict";
/*function calculateDistance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function isDistanceValid(x1, y1, x2, y2) {
  const distance = calculateDistance(x1, y1, 0, 0);
  const isValid = Number.isInteger(distance);
  const status = isValid ? "valid" : "invalid";

  console.log(`${x1}, ${y1} to {${x2}, ${y2}} is ${status}.`);
}

function checkPointDistanceValidity(x1, y1, x2, y2) {
  isDistanceValid(x1, y1, 0, 0);
  isDistanceValid(x2, y2, 0, 0);
  isDistanceValid(x1, y1, x2, y2);
}
checkPointDistanceValidity(3, 0, 0, 4);*/

/*function solve(text) {
  const result = text
    .split(/[\W]+/)
    .filter((w) => w.length > 1)
    .map((w) => w.toUpperCase())
    .join(", ");
  console.log(result);
}

solve("Hi, how are you?");*/
