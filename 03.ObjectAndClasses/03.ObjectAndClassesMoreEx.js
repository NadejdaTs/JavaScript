"use strict";

// 01
/*class Storage {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = [];
  }

  get totalCost() {
    return this.storage.reduce((acc, el) => {
      return acc + el.price * el.quantity;
    }, 0);
  }

  addProduct(product) {
    this.storage.push(product);
    this.capacity -= product.quantity;
    return;
  }

  getProducts() {
    let output = [];
    this.storage.forEach((product) => {
      output.push(JSON.stringify(product));
    });
    return output.join("\n");
  }
}

// Test 1
let productOne = { name: "Cucamber", price: 1.5, quantity: 15 };
let productTwo = { name: "Tomato", price: 0.9, quantity: 25 };
let productThree = { name: "Bread", price: 1.1, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);

// Test 2
let productOne = {name: 'Tomato', price: 0.90, quantity: 19};
let productTwo = {name: 'Potato', price: 1.10, quantity: 10};
let storage = new Storage(30);
storage.addProduct(productOne);
storage.addProduct(productTwo);
console.log(storage.totalCost);*/

// 02
/*function solve(input) {
  // SOLUTION 1
  const products = input.reduce((acc, curr) => {
    const [key, value] = curr.split(" : ");
    acc[key] = Number(value);
    return acc;
  }, {});

  const sortedKeys = Object.keys(products).sort();
  let letter = sortedKeys[0][0];

  console.log(letter);
  sortedKeys.forEach((key, i) => {
    if (key[0] !== letter) {
      letter = key[0];
      console.log(letter);
    }
    console.log(`  ${key}: ${products[key]}`);
  });

  // SOLUTION 2
  //   const products = input.reduce((acc, curr) => {
  //     const [name, price] = curr.split(" : ");
  //     const letter = name[0];

  //     if (!acc[letter]) {
  //       acc[letter] = [];
  //     }

  //     acc[letter].push({ name, price });
  //     return acc;
  //   }, {});

  //   Object.keys(products)
  //     .sort()
  //     .forEach((letter) => {
  //       console.log(letter);
  //       products[letter]
  //         .sort((a, b) => a.name.localeCompare(b.name))
  //         .forEach((product) => {
  //           console.log(`  ${product.name} : ${product.price}`);
  //         });
  //     });
}

solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

solve(["Omlet : 5.4", "Shirt : 15", "Cake : 59"]);*/

// 03
/*class Laptop {
  constructor(info, quality) {
    this.info = {
      producer: info.producer,
      age: info.age,
      brand: info.brand,
    };
    this.quality = quality;
    this.isOn = false;
  }

  turnOn() {
    this.isOn = true;
    this.quality--;
  }

  turnOff() {
    this.isOn = false;
    this.quality--;
  }

  showInfo() {
    return this.info;
  }

  get price() {
    return 800 - info.age * 2 + this.quality * 0.5;
  }
}

// Test 1
let info = { producer: "Dell", age: 2, brand: "XPS" };
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);

// Test 2
let info = { producer: "Lenovo", age: 1, brand: "Legion" };
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
laptop.turnOn();
laptop.turnOff();
console.log(laptop.isOn);*/

// 04
/*function solve([flights, statusChanges, [status]]) {
  const flightMap = flights.reduce((acc, curr) => {
    const [number, destination] = curr.split(" ");
    acc[number] = {
      destination,
      status: null,
    };
    return acc;
  }, {});

  statusChanges.forEach((change) => {
    const [number, status] = change.split(" ");
    if (flightMap[number]) {
      flightMap[number].status = status;
    }
  });

  if (status === "Ready to fly") {
    Object.entries(flightMap).forEach(([number, data]) => {
      if (data.status === null) {
        data.status = "Ready to fly";
        console.log(data);
      }
    });
  } else {
    Object.entries(flightMap).forEach(([number, data]) => {
      if (data.status === "Cancelled") {
        console.log(data);
      }
    });
  }
}

// Test 1
// solve([
//   [
//     "WN269 Delaware",
//     "FL2269 Oregon",
//     "WN498 Las Vegas",
//     "WN3145 Ohio",
//     "WN612 Alabama",
//     "WN4010 New York",
//     "WN1173 California",
//     "DL2120 Texas",
//     "KL5744 Illinois",
//     "WN678 Pennsylvania",
//   ],
//   [
//     "DL2120 Cancelled",
//     "WN612 Cancelled",
//     "WN1173 Cancelled",
//     "SK430 Cancelled",
//   ],
//   ["Cancelled"],
// ]);

// Test 2
solve([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK330 Cancelled",
  ],
  ["Ready to fly"],
]);*/

// 05
/*function sortRegister(input) {
  let register = {};
  for (const line of input) {
    let tokens = line.split(", ");
    let grade = Number(tokens[1].split(": ")[1]) + 1;
    let name = tokens[0].split(": ")[1];
    let score = Number(tokens[2].split(": ")[1]);

    if (score >= 3) {
      if (!register.hasOwnProperty(grade)) {
        register[grade] = {
          name: [name],
          average: [score],
        };
      } else {
        register[grade].name.push(name);
        register[grade].average.push(score);
      }
    }
  }
  for (const grade in register) {
    const student = register[grade];
    console.log(`${Number(grade) + 1} Grade`);
    console.log(`List of students: ${student.name.join(", ")}`);
    const avgScore =
      student.average.reduce((a, b) => a + b) / student.average.length;
    console.log(`Average annual score from last year: ${avgScore.toFixed(2)}`);
    console.log(" ");
  }
}

// Test 1
sortRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);

// Test 2
sortRegister([
  "Student name: George, Grade: 5, Graduated with an average score: 2.75",
  "Student name: Alex, Grade: 9, Graduated 2 Grade List of students: Darsy Average annual score from last year: with an average score: 3.66",
  "Student name: Peter, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Boby, Grade: 5, Graduated with an average score: 4.20",
  "Student name: John, Grade: 9, Graduated with an average score: 2.90",
  "Student name: Steven, Grade: 2, Graduated with an average score: 4.90",
  "Student name: Darsy, Grade: 1, Graduated with an average score: 5.15",
]);*/

// 06
