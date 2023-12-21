/*function printStudentDetails(name, age, avgGrade) {
  // console.log("Name: " + name + ", Age:" + age + ", Avg. Grade: " + avgGrade);
  console.log(`Name: ${name}, Age: ${age}, Avg. Grade ${avgGrade.toFixed(2)}`);
}
printStudentDetails("Alex", 29, 4);
*/
/*function solve(num) {
  if (num < 1 || num > 12) {
    console.log("Error!");
  } else {
    switch (num) {
      case 1:
        console.log("January");
        break;
      case 2:
        console.log("February");
        break;
      default:
        console.log("Error!");
        break;
    }
  }
}
solve(2);
*/
/*function solve(num1, num2, operation) {
    // let result = 0;
  switch (operation) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
  }
}
solve(1, 2, "+");
*/

/*function findHighestNumber(...input) {
  const sortedInput = input.sort(function (a, b) {
    return b - a;
  });
  const largestNumber = sortedInput[0];
  console.log(largestNumber);*/

/*let largestNumber = 0;
  for (let index = 0; index < input.length; index++) {
    // const element = input[index];
    if (input[index] > largestNumber) {
      largestNumber = input[index];
    }
  }
  console.log(largestNumber);*/
// }
// findHighestNumber(1, 4, 2, 6, 10, 9, 7, 50);

/*const domains = ["example.com", "softuni.com"];
const domainsWithBGSuffix = domains.map(function (domain) {
  return domain.replace(".com", ".bg");
});
console.log(domainsWithBGSuffix);*/

/*const domains = ["example.com", "softuni.com", "example.bg"];
const domainsWithBGSuffix = domains.filter(function (domain) {
  return domain.includes(".com");
});
console.log(domainsWithBGSuffix);*/

/*function sumFirstAndLastElement(arr) {
  const first = arr[0];
  const last = arr[arr.length - 1];
  console.log(first + last);
}
sumFirstAndLastElement([10, 17, 22, 33]);*/

// First way
/*function reverseArray(count, arr) {
  let resultArray = [];

  for (let index = 0; index < count; index++) {
    resultArray.push(arr[index]);
  }

  console.log(resultArray.reverse().join(", "));
}

reverseArray(3, [10, 20, 30, 40, 50]);*/

// Second way
/*function reverseArray(count, arr) {
  let resultArray = arr.slice(0, count).reverse().join(", ");
  console.log(resultArray);
}

reverseArray(3, [10, 20, 30, 40, 50]);*/

/*function calculateDifferenceBetweenOddAndEven(arr) {
  let sumOdd = 0;
  let sumEven = 0;

  arr.forEach(function (element) {
    if (element % 2 === 0) {
      sumEven += element;
    } else {
      sumOdd += element;
    }
  });
  console.log(sumEven - sumOdd);
}

calculateDifferenceBetweenOddAndEven([10, 20, 30, 40, 50]);*/

/*function getSubstring(text, startIndex, endIndex) {
  const substring = text.substring(startIndex, endIndex + 1);
  console.log(substring);
}
getSubstring("ASentence", 1, 8);*/
/**
 * for (let index = 0; index < text.length; index++) {
 *    if(index >= startIndex || index <= endIndex){
 *        substring += text[index];
 *    }
 *}
 */

/*function censorWords(text, word) {
  const censorshipWord = "*".repeat(word.length);
  let censoredText = text;
  while (censoredText.includes(word)) {
    censoredText = censoredText.replace(word, censorshipWord);
  }
  console.log(censoredText);
}
censorWords("A small sentence with some small words", "small");*/

// First way
/*function countOccurences(text, word) {
  const words = text.split(" ");
  let occurances = 0;

  for (let index = 0; index < words.length; index++) {
    if (words[index] === word) {
      occurances++;
    }
  }
  console.log(occurances);
}*/

// Second way
/*function countOccurences(text, word) {
  const occurances = text.split(" ").filter(function (element) {
    return element === word;
  }).length;
  console.log(occurances);
}*/
// countOccurences("This is a word and it also is a sentence", "is");
