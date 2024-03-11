"use strict";

// 01
function solve(input) {
  // Complex solution
  const employees = input.reduce((acc, curr) => {
    acc[curr] = curr.length;
    return acc;
  }, {});

  Object.keys(employees).forEach((key) => {
    console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
  });
}

solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);

// 02
/*function solve(input) {
  input
    .map((city) => {
      const [town, latitude, longitude] = city.split(" | ");
      return { town, latitude, longitude };
    })
    .forEach((city) => {
      console.log(JSON.stringify(city));
    });
}

solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);*/

// 03
/*function solve(currentStock, deliveredStock) {
  const products = [...currentStock, ...deliveredStock];

  const stock = products.reduce((acc, curr, i) => {
    if (i % 2 === 0) {
      if (!acc.hasOwnProperty(curr)) {
        acc[curr] = Number(products[i + 1]);
      } else {
        acc[curr] += Number(products[i + 1]);
      }
    }

    return acc;
  }, {});

  Object.keys(stock).forEach((key) => {
    console.log(`${key} -> ${stock[key]}`);
  });
}

solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);*/

// 04
/*class MovieLibrary {
  constructor() {
    this.movies = [];
  }

  addMovie(command) {
    const [_, name] = command.split("addMovie ");
    this.movies.push({ name });
  }

  addDirector(command) {
    const [movieName, directorName] = command.split(" directedBy ");
    const movie = this.movies.find((m) => m.name === movieName);

    if (movie) {
      movie.director = directorName;
    }
  }

  addDate(command) {
    const [movieName, date] = command.split(" onDate ");
    const movie = this.movies.find((m) => m.name === movieName);

    if (movie) {
      movie.date = date;
    }
  }
}

function createMovieLibrary() {
  let movies = [];

  return {
    addMovie: (command) => {
      const [_, name] = command.split("addMovie ");
      movies.push({ name });
    },
    addDirector: (command) => {
      const [movieName, directorName] = command.split(" directedBy ");
      const movie = movies.find((m) => m.name === movieName);

      if (movie) {
        movie.director = directorName;
      }
    },
    addDate: (command) => {
      const [movieName, date] = command.split(" onDate ");
      const movie = movies.find((m) => m.name === movieName);

      if (movie) {
        movie.date = date;
      }
    },
    getMovies() {
      return movies;
    },
  };
}

function solve(input) {
  const movieLibrary = new MovieLibrary();

  input.forEach((command) => {
    if (command.includes("addMovie")) {
      movieLibrary.addMovie(command);
    } else if (command.includes("directedBy")) {
      movieLibrary.addDirector(command);
    } else if (command.includes("onDate")) {
      movieLibrary.addDate(command);
    }
  });

  movieLibrary.movies
    .filter((m) => m.name && m.director && m.date)
    .forEach((m) => console.log(JSON.stringify(m)));
}

solve([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);

solve([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);*/

// 06
/*function solve(input) {
  const [searchWords, ...words] = input;

  const wordOccurances = searchWords.split(" ").reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});

  words.forEach((word) => {
    if (wordOccurances.hasOwnProperty(word)) {
      wordOccurances[word] += 1;
    }
  });

  // print to the console
}

solve([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);*/

// 8
/*function solve(input) {
  const parking = new Set();

  input.forEach((entry) => {
    const [command, number] = entry.split(", ");

    if (command === "IN") {
      parking.add(number);
    } else if (command === "OUT") {
      parking.delete(number);
    }
  });

  const carNumbers = Array.from(parking).sort();

  console.log(carNumbers);
}

solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);*/

// 09
/*function solve(input) {
  const dictionary = input.reduce((acc, curr) => {
    const term = JSON.parse(curr);
    acc = { ...acc, ...term };
    return acc;
  }, {});

  // ALTERNATIVE SOLUTION
  //   let dictionary = {};

  //   input.forEach((jsonString) => {
  //     const term = JSON.parse(jsonString);
  //     dictionary = Object.assign(dictionary, term);
  //   });

  const sortedDictionaryTerms = Object.keys(dictionary).sort();

  sortedDictionaryTerms.forEach((term) =>
    console.log(`Term: ${term} => Definition: ${dictionary[term]}`)
  );
}

solve([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);*/

// 10
/*class Vehicle {
  constructor(type, model, parts, fuel) {
    this.type = type;
    this.model = model;
    this.parts = {
      engine: parts.engine,
      power: parts.power,
      quality: parts.engine * parts.power,
    };
    this.fuel = fuel;
  }

  drive(fuelLost) {
    this.fuel -= fuelLost;
  }
}

// test input
// let parts = { engine: 6, power: 100 };
// let vehicle = new Vehicle("a", "b", parts, 200);
// vehicle.drive(100);
// console.log(vehicle.fuel);
// console.log(vehicle.parts.quality);

// test input 2
let parts = { engine: 9, power: 500 };
let vehicle = new Vehicle("l", "k", parts, 840);
vehicle.drive(20);
console.log(vehicle.fuel);*/

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
