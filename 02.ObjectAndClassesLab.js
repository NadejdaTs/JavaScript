"use strict";

/*function printCityInfo(city) {
  for (const key in city) {
    console.log(key + " -> " + city[key]);
  }
}
const city = {
  name: "Sofia",
  area: 492,
  population: 1234568789,
  postCode: 1000,
  country: "Bulgaria",
};

printCityInfo(city);*/

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
    console.log(cat);
    greet();
  });
}

createCats(["Mellow 2", "Tom 5"]);*/

/*class Song {
  constructor(type, name, length) {
    this.type = type;
    this.name = name;
    this.length = length;
  }
}

function solve(input) {
  const typeToDisplay = input.pop();
  const [_, ...songs] = input;

  songs.map((songAsText) => {
    const [type, name, length] = songAsText.split("_");
    if (type === typeToDisplay) {
      console.log(name);
    }
  });
}

solve([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smoot Chriminal_4:01",
  "favourite",
]);*/
// const song = new Song(type, name, length);
// return song;
/*if(typeToDisplay === "all"){
      return song;
    }
    reutrn song.type == typeToDisplay;*/
