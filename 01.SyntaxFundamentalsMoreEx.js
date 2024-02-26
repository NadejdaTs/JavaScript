("use strict");
// 01
function calculateDistance(x1, y1, x2, y2) {
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
checkPointDistanceValidity(3, 0, 0, 4);
checkPointDistanceValidity(2, 1, 1, 1);

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
