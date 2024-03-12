"use strict";

// More Ex 2
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
    console.log(`  ${key} : ${products[key]}`);
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
]);*/

// More Ex 4
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

  console.log(status);

  if (status === "Ready to fly") {
    Object.entries(flightMap).forEach(([number, data]) => {
      //   console.log(number, data);
      if (data.status === null) {
        data.status = "Ready to fly";
        console.log(data);
      }
    });
  } else {
    // print based on status
  }
}

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
