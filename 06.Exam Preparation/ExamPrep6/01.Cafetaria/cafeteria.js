function barista(input) {
  const baristaCnt = Number(input.shift());
  const commands = input.slice(baristaCnt);

  let baristas = [];
  for (let i = 0; i < baristaCnt; i++) {
    const [name, shift, drinks] = input.shift().split(" ");
    baristas.push({ name, shift, drinks: drinks.split(",") });
  }

  const commandRunner = {
    Prepare: prepareBarista,
    "Change Shift": changeShiftForBarista,
    Learn: learnBarista,
  };

  commands.forEach((command) => {
    if (command === "Closed") {
      printResult();
    } else {
      const [commandName, ...rest] = command.split(" / ");
      commandRunner[commandName](...rest);
    }
  });

  function prepareBarista(name, shift, drinkType) {
    let barista = getBaristaByName(name);

    if (barista.shift === shift && barista.drinks.includes(drinkType)) {
      console.log(`${name} has prepared a ${drinkType} for you!`);
    } else {
      console.log(`${name} is not available to prepare a ${drinkType}.`);
    }
  }

  function changeShiftForBarista(name, newShift) {
    let barista = getBaristaByName(name);

    barista.shift = newShift;
    console.log(`${name} has updated his shift to: ${newShift}`);
  }

  function learnBarista(name, newDrink) {
    let barista = getBaristaByName(name);

    if (barista.drinks.includes(newDrink)) {
      console.log(`${name} knows how to make ${newDrink}.`);
    } else {
      barista.drinks.push(newDrink);
      console.log(`${name} has learned a new coffee type: ${newDrink}.`);
    }
  }

  function getBaristaByName(name) {
    return baristas.find((b) => b.name === name);
  }

  function printResult() {
    baristas.forEach((barista) => {
      console.log(
        `Barista: ${barista.name}, Shift: ${
          barista.shift
        }, Drinks: ${barista.drinks.join(", ")}`
      );
    });
  }
}
barista([
  "3",
  "Alice day Espresso,Cappuccino",
  "Bob night Latte,Mocha",
  "Carol day Americano,Mocha",
  "Prepare / Alice / day / Espresso",
  "Change Shift / Bob / night",
  "Learn / Carol / Latte",
  "Learn / Bob / Latte",
  "Prepare / Bob / night / Latte",
  "Closed",
]);

// barista([
//   "4",
//   "Alice day Espresso,Cappuccino",
//   "Bob night Latte,Mocha",
//   "Carol day Americano,Mocha",
//   "David night Espresso",
//   "Prepare / Alice / day / Espresso",
//   "Change Shift / Bob / day",
//   "Learn / Carol / Latte",
//   "Prepare / Bob / night / Latte",
//   "Learn / David / Cappuccino",
//   "Prepare / Carol / day / Cappuccino",
//   "Change Shift / Alice / night",
//   "Learn / Bob / Mocha",
//   "Prepare / David / night / Espresso",
//   "Closed",
// ]);
