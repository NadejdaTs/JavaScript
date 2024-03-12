"use strict";

// 01
/*function employees(input) {
  const employees = input.reduce((acc, curr) => {
    acc[curr] = curr.length;
    return acc;
  }, {});

  Object.keys(employees).forEach((key) => {
    console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
  });
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
employees(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);*/

// 02
/*function towns(input) {
  input
    .map((city) => {
      const [town, latitude, longitude] = city.split(" | ");
      return { town, latitude, longitude };
    })
    .forEach((city) => {
      console.log(JSON.stringify(city));
    });
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);*/

// 03
/*function storeProvision(currentStock, deliveredStock) {
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

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
storeProvision(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
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

/*function createMovieLibrary() {
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
}*/

// 05
/*class Hero {
  constructor(name, heroLevel, items) {
    this.name = name;
    this.heroLevel = heroLevel;
    this.items = items;
  }
}
function solve(input) {
  const heroes = new Map();
  input.forEach((line) => {
    const [name, heroLevel, items] = line.split(" / ");
    const hero = new Hero(name, heroLevel, items);

    heroes.set(heroLevel, hero);
  });

  const keyValArray = Array.from(heroes).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  const sortedByKey = new Map(keyValArray);
  // const sortedByKey = new Map(
  //   [...heroes.entries()].sort((a, b) => Number(a[1]) - Number(b[1]))
  // );

  sortedByKey.forEach((hero) => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.heroLevel}`);
    console.log(`items => ${hero.items}`);
  });
}

solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

solve([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
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
  searchWords
    .split(" ")
    // .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((word) => {
      console.log(`${word} - ${wordOccurances[word]}`);
    });
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
]);

solve([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);*/

// 07
/*function oddOccurrences(input) {
  const array = input.split(" ").map((element) => element.toLowerCase());
  let collection = {};

  collection = array.reduce((acc, curr, i) => {
    if (!acc.hasOwnProperty(curr)) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});

  collection = Object.entries(collection)
    .filter(([word, value]) => {
      if (value % 2 !== 0) {
        return word;
      }
    })
    .map((element) => element[0]);

  console.log(collection.join(" "));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");*/

// 08
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

  if (carNumbers.length != 0) {
    console.log(carNumbers);
  } else {
    console.log("Parking Lot is Empty");
  }
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
]);

solve(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);*/

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
