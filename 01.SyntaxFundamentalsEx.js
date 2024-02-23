("use strict");
// 01
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
solve(-1);*/

// 02
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
/*function solve(count, type, day) {
  const prices = {
    Students: {
      Friday: 8.45,
      Saturday: 9.8,
      Sunday: 10.46,
    },
    Business: {
      Friday: 10.9,
      Saturday: 15.6,
      Sunday: 16.0,
    },
    Regular: {
      Friday: 15.0,
      Saturday: 20.0,
      Sunday: 22.5,
    },
  };
  let sum = 0;
  const cost = prices[type][day];
  sum = count * cost;

  if (type === "Students" && count >= 30) {
    sum -= sum * 0.15;
  } else if (type === "Business" && count >= 100) {
    sum -= sum * 0.1;
  } else if (type === "Regular" && count >= 10 && count <= 20) {
    sum -= sum * 0.05;
  }

  console.log(`Total price: ${sum.toFixed(2)}`);
}
solve(40, "Regular", "Saturday");*/

// 03
/*function solve(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    console.log("yes");
  } else if (year % 400 === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
solve(2003);*/

// 04
/*function solve(start, end) {
  const numbers = [];
  let sum = 0;

  for (let i = start; i <= end; i++) {
    numbers.push(i);
    sum += i;
  }
  console.log(numbers.join(" ").trim());
  console.log(`Sum: ${sum}`);
}
solve(0, 26);*/

// 05
/*function solve(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} X ${i} = ${number * i}`);
  }
}

solve(7);*/

// 06
/*function solve(number) {
  const digitsString = number.toString();
  let sum = 0;
  for (let index = 0; index < digitsString.length; index++) {
    sum += Number(digitsString[index]);
  }
  console.log(sum);
}
solve(245678);*/

// 07
/*function solve(a, b, c) {
  console.log(`${a}${b}${c}`);
}
solve("a", "b", "c");*/

// 08
/*function solve(a, b, c) {
  console.log(`${c} ${b} ${a}`);
}
solve("a", "b", "c");*/

// 09
/*function calculateFruitPrice(fruit, weightInGrams, pricePerKilogram) {
  const weightInKilograms = (weightInGrams / 1000).toFixed(2);
  const totalPrice = (weightInKilograms * pricePerKilogram).toFixed(2);

  console.log(
    `I need $${totalPrice} to buy ${weightInKilograms} kilograms ${fruit}`
  );
}
calculateFruitPrice("apple", 1563, 2.35);*/

// 10
// First way
/*function checkIfAllDigitsAreSame(number) {
  const digitsString = number.toString();
  let isConsistent = false;

  for (let index = 1; index < digitsString.length; index++) {
    if (digitsString[index] !== digitsString[index - 1]) {
      isConsistent = true;
    }
  }
  console.log(isConsistent);
}
checkIfAllDigitsAreSame(1234);*/

// Second way
/*function checkIfAllDigitsAreSame(number) {
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

// 11
/*function chackSpeeding(speed, area) {
  const speedLimits = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  const currentSpeedLimit = speedLimits[area];
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
chackSpeeding(21, "residential");
chackSpeeding(120, "interstate");*/

// 12
/*function cookNumber(number, ...commands) {
  let sum = Number(number);

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];
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
cookNumber("9", "dice", "spice", "chop", "bake", "fillet");*/

// 13
/*function rotateArray(arr, rotationCount) {
  for (let index = 0; index < rotationCount; index++) {
    const firstElement = arr.shift();
    arr.push(firstElement);
  }
  console.log(arr);
}

rotateArray([51, 47, 32, 61, 21], 2);*/

// 14
/*function sortList(arr, step) {
  const resultArray = [];
  const length = arr.length;

  for (let i = 0; i < length; i += step) {
    let currElement = arr[i];
    resultArray.push(currElement);
  }
  console.log(resultArray);
}
sortList(["5", "20", "31", "4", "20"], 2);
sortList(["dsa", "asd", "test", "tset"], 2);
sortList(["1", "2", "3", "4", "5"], 6);*/

// 15
/*function listOfNames(names) {
  const sortedArray = names.sort((a, b) => a - b);
  for (let i = 0; i < sortedArray.length; i++) {
    console.log(i + 1 + "." + sortedArray[i]);
  }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);*/

// 16
/*function sortingNumbers(arrOfNumbers) {
  const sortedArray = arrOfNumbers.sort((a, b) => a - b);
  const resultArray = [];

  let length = sortedArray.length / 2;
  for (let i = 0; i < length; i++) {
    resultArray.push(sortedArray[i]);
    resultArray.push(sortedArray.pop());
  }
  console.log(resultArray);
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);*/

// 17
/*function revealWords(words, arr) {
  const text = arr.split(" ");
  const result = [];
  const wordsArr = words.split(", ");

  for (let i = 0; i < text.length; i++) {
    const currWord = text[i];
    let isWord = false;

    for (let j = 0; j < wordsArr.length; j++) {
      const word = wordsArr[j];
      if (currWord === "*".repeat(word.length)) {
        result.push(word);
        isWord = true;
        break;
      }
    }
    if (!isWord) {
      result.push(currWord);
    }
  }
  console.log(result.join(" "));
}
revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);*/

// 18
/*function hashTag(text) {
  const array = text.split(" ");
  for (let index = 0; index < array.length; index++) {
    const currWord = array[index];
    let isOnlyLetters = true;
    if (currWord.startsWith("#") && currWord.length > 1) {
      for (let i = 1; i < currWord.length; i++) {
        const letter = currWord[i];
        if (
          !(letter >= "a" && letter <= "z") &&
          !(letter >= "A" && letter <= "Z")
        ) {
          isOnlyLetters = false;
          break;
        }
      }
      if (isOnlyLetters) {
        console.log(currWord.substring(1, currWord.length + 1));
      }
    }
  }
}
hashTag("Nowadays everyone uses # to tag a #special word in #socialMedia");
hashTag(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);*/

// 19
/*function findTheWord(word, text) {
  const array = text.split(" ");
  let isFound = false;
  for (let index = 0; index < array.length; index++) {
    const currWord = array[index];
    if (currWord.toLowerCase() === word.toLowerCase()) {
      console.log(word);
      isFound = true;
      break;
    }
  }
  if (!isFound) {
    console.log(word + " not found!");
  }
}
findTheWord("javascript", "JavaScript is the best programming language");
findTheWord("python", "JavaScript is the best programming language");*/

// 20
function pascalCaseSplitter(array) {
  // const array = text.split(" ");
  for (let index = 0; index < array.length; index++) {
    const currLetter = array[index];
    let currWord = "";
    if (currLetter === currLetter.toUpperCase()) {
      currWord += currLetter;
    }
  }
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
pascalCaseSplitter("HoldTheDoor");
pascalCaseSplitter("ThisIsSoAnnoyingToDo");

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

// 16
/*function solve(text) {
  const result = text
    .split(/[\W]+/)
    .filter((w) => w.length > 1)
    .map((w) => w.toUpperCase())
    .join(", ");
  console.log(result);
}

solve("Hi, how are you?");*/
