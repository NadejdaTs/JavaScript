("use strict");
// 01
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

// 02
/*function solve(text) {
  const result = text
    .split(/[\W]+/)
    .filter((w) => w.length > 1)
    .map((w) => w.toUpperCase())
    .join(", ");
  console.log(result);
}

solve("Hi, how are you?");*/

// 03
/*function calculator(num1, operad, num2) {
  let result = 0;
  switch (operad) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }
  console.log(result.toFixed(2));
}
calculator(5, "+", 10);
calculator(25.5, "-", 3);*/

// 03
/*function gladiatorExpenses(
  lostFight,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let helmet = 0;
  let sword = 0;
  let shield = 0;
  let armor = 0;
  for (let i = 1; i <= lostFight; i++) {
    let isShield = false;
    if (i % 2 === 0) {
      helmet++;
    }
    if (i % 3 === 0) {
      sword++;
    }
    if (i % 2 === 0 && i % 3 === 0) {
      shield++;
      isShield = true;
    }
    if (shield % 2 === 0 && isShield == true) {
      armor++;
    }
    isShield = false;
  }
  let totalPrice = (
    helmet * helmetPrice +
    sword * swordPrice +
    shield * shieldPrice +
    armor * armorPrice
  ).toFixed(2);
  console.log("Gladiator expenses: " + totalPrice + " aureus");
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);*/

// 05
/*function spiceFlow(production) {
  let workingDay = 0;
  let total = 0;
  while (production >= 100) {
    let spicePerDay = production;
    workingDay++;
    production -= 10;
    if (spicePerDay >= 26) {
      spicePerDay -= 26;
    }
    total += spicePerDay;
  }
  console.log(workingDay);
  console.log(total - 26);
}
spiceFlow(111);
spiceFlow(450);*/

// 06
/*function login(text) {
  const userName = text[0];
  const reversedUser = userName.split("").reduce((acc, char) => char + acc, "");
  let blocker = 0;
  for (let index = 1; index < text.length; index++) {
    if (text[index] != reversedUser) {
      blocker++;
      if (blocker > 3) {
        console.log(`User ${userName} blocked!`);
        break;
      }
      console.log("Incorrect password. Try again.");
    } else {
      console.log(`User ${userName} logged in.`);
    }
  }
}
login(["Acer", "login", "go", "let me in", "recA"]);
login(["sunny", "rainy", "cloudy", "sunny", "notsunny"]);*/

// 07
/*function bitcoin(arrayOfGold) {
  let totalGold = 0;
  let firstBitcoin = 0;
  let excangeGold = 67.51;
  let bitcoin = 11949.16;
  for (let i = 0; i < arrayOfGold.length; i++) {
    let currGold = arrayOfGold[i];
    if ((i + 1) % 3 === 0) {
      currGold -= currGold * 0.3;
    }
    totalGold += currGold;
    if (currGold * excangeGold >= bitcoin && firstBitcoin === 0) {
      firstBitcoin = i + 1;
    }
  }
  let goldInLeva = totalGold * excangeGold;
  let bitcoins = 0;
  while (goldInLeva >= bitcoin) {
    goldInLeva -= bitcoin;
    bitcoins++;
  }
  console.log("Bought bitcoins: " + bitcoins);
  if (firstBitcoin != 0) {
    console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
  }
  console.log(`Left money: ${goldInLeva.toFixed(2)} lv.`);
}
bitcoin([100, 200, 300]);
bitcoin([50, 100]);
bitcoin([3124.15, 504.212, 2511.124]);*/

// 08
/*function kingDjoser(base, increment) {
  let height = 0;
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;
  while (base >= 1) {
    height++;
    if (base > 1) {
      stone += (base - 2) * (base - 2);
    }

    if (base - 2 >= 1) {
      if (height % 5 === 0) {
        lapis += base * 2 + (base - 2) * 2;
      } else {
        marble += base * 2 + (base - 2) * 2;
      }
    }

    if (base > 1) {
      gold = base * 2;
    } else {
      gold = 1;
    }
    base -= 2;
  }

  stone *= increment;
  marble *= increment;
  lapis *= increment;
  gold *= increment;
  height *= increment;
  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(height)}`);
}
kingDjoser(11, 1);
kingDjoser(11, 0.75);
kingDjoser(12, 1);
kingDjoser(23, 0.5);*/
