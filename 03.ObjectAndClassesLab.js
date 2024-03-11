"use strict";

// 01
/*function personalInfo(firstName, lastName, age) {
  const person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };
  return JSON.stringify(person);
}
console.log(personalInfo("Peter", "Pan", "20"));*/

// 02
/*function printCityInfo(city) {
  for (const key in city) {
    console.log(key + " -> " + city[key]);
  }
}
const city = {
  name: "Sofia",
  area: 492,
  population: 1234568789,
  country: "Bulgaria",
  postCode: 1000,
};
printCityInfo(city);*/

// Lab01
/*function solve(obj) {
  const myInnerObj = { ...obj };
  myInnerObj.c.x = 10;
}

const myObj = {
  a: 1,
  b: 2,
  c: {
    x: 1,
  },
};
solve(myObj);
console.log(JSON.stringify(myObj));*/

// 03
/*function createCity(name, population, treasury) {
  return {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percentage) {
      this.population += this.population * percentage;
    },
    applyRecession(percentage) {
      this.treasury -= this.treasury * percentage;
    },
  };
}

const city = createCity("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(0.05);
console.log(city.population);*/

// 04
/*function convertToObject(input) {
  let result = JSON.parse(input);
  for (const key in result) {
    console.log(key + ": " + result[key]);
  }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');*/

// 05
/*function convertToJSON(name, lastName, hairColor) {
  const person = {
    name: name,
    lastName: lastName,
    hairColor: hairColor,
  };
  console.log(JSON.stringify(person));
}
convertToJSON("George", "Jones", "Brown");*/

// 06
/*function collectPhone(arr) {
  const phoneObject = arr.reduce((acc, curr) => {
    const [name, phone] = curr.split(" ");
    // name will be for this phone
    acc[name] = phone;

    return acc;
  }, {});
  Object.entries(phoneObject).forEach(([key, value]) => {
    console.log(`${key} -> ${value}`);
  });
}

collectPhone([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);*/

/*const obj = {
  name: "John",
};
if (obj.hasOwnProperty("name")) {
  console.log("here!");
}*/

// 07
/*function schedule(input) {
  const schedule = input.reduce((acc, curr) => {
    const [day, name] = curr.split(" ");

    if (acc.hasOwnProperty(day)) {
      console.log(`Conflict for ${day}!`);
    } else {
      acc[day] = name;
      console.log(`Scheduled for ${day}.`);
    }
    return acc;
  }, {});
  console.log(schedule);
}
schedule(["Monday Peter", "Wendsday Bill", "Monday Tim", "Friday Tim"]);*/

// 08
/*function addressBook(input) {
  const resultMap = new Map();
  const address = input.reduce((acc, curr) => {
    const [name, address] = curr.split(":");

    resultMap.set(name, address);
    return acc;
  }, {});

  const sortedByKey = new Map([...resultMap.entries()].sort());
  for (let [key, value] of sortedByKey) {
    console.log(`${key} -> ${value}`);
  }
}

addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
addressBook([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);*/

// 09
/*class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  meow = () => {
    console.log(`${this.name}, age ${this.age} says meow!`);
  };
}

function createCats(input) {
  input.forEach((line) => {
    const [name, age] = line.split(" ");
    const cat = new Cat(name, age);
    const greet = cat.meow;
    greet();
  });
}

createCats(["Mellow 2", "Tom 5"]);
createCats(["Candy 1", "Poppy 3", "Nyx 2"]);*/

// 10
/*class Song {
  constructor(type, name, length) {
    this.type = type;
    this.name = name;
    this.length = length;
  }
}

function solve(input) {
  let songs = [];
  const typeToDisplay = input.pop();
  let numberOfSongs = input.shift();

  for (let i = 0; i < numberOfSongs; i++) {
    let [type, name, time] = input[i].split("_");
    let song = new Song(type, name, time);
    songs.push(song);
    if (typeToDisplay === "all") {
      songs.forEach((i) => console.log(i.name));
    } else {
      let filtered = songs.filter((i) => i.type === typeToDisplay);
      filtered.forEach((i) => console.log(i.name));
    }
  }
}

solve([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smoot Chriminal_4:01",
  "favourite",
]);
solve([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
solve([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);*/

/*const [_, ...songs] = input;
  songs.map((songAsText) => {
    const [type, name, length] = songAsText.split("_");
    if (type === typeToDisplay) {
      console.log(name);
    }
  });*/
