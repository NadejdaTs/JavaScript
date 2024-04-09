function astroAdventure(input) {
  const astroCnt = Number(input.shift());
  const commands = input.slice(astroCnt);

  let astronauts = [];
  for (let i = 0; i < astroCnt; i++) {
    const [name, oxygenLevel, energyReserve] = input.shift().split(" ");

    astronauts.push({
      name,
      oxygenLevel: Number(oxygenLevel),
      energyReserve: Number(energyReserve),
    });
  }

  const commandRunner = {
    Explore: exploreAstronauts,
    Refuel: refuelAstronauts,
    Breathe: breatheAstronauts,
  };

  commands.forEach((command) => {
    if (command === "End") {
      printResult();
    } else {
      const [commandName, ...rest] = command.split(" - ");
      commandRunner[commandName](...rest);
    }
  });

  function exploreAstronauts(name, neededEnergy) {
    const astronaut = findAstronautByName(name);

    if (astronaut.energyReserve >= Number(neededEnergy)) {
      astronaut.energyReserve -= Number(neededEnergy);
      console.log(
        `${name} has successfully explored a new area and now has ${astronaut.energyReserve} energy!`
      );
    } else {
      console.log(`${name} does not have enough energy to explore!`);
    }
  }

  function refuelAstronauts(name, energyAmt) {
    const astronaut = findAstronautByName(name);
    let energy = Number(energyAmt);
    let total = astronaut.energyReserve + energy;
    if (total >= 200) {
      energy = energy - (total - 200);
    }
    astronaut.energyReserve += energy;
    console.log(`${name} refueled their energy by ${energy}!`);
  }

  function breatheAstronauts(name, oxygenAmt) {
    const astronaut = findAstronautByName(name);
    let oxygen = Number(oxygenAmt);
    let total = astronaut.oxygenLevel + oxygen;
    if (total >= 100) {
      oxygen = oxygen - (total - 100);
    }
    astronaut.oxygenLevel += oxygen;
    console.log(`${name} took a breath and recovered ${oxygen} oxygen!`);
  }

  function printResult() {
    astronauts.forEach((astronaut) => {
      console.log(
        `Astronaut: ${astronaut.name}, Oxygen: ${astronaut.oxygenLevel}, Energy: ${astronaut.energyReserve}`
      );
    });
  }

  function findAstronautByName(name) {
    return astronauts.find((astronaut) => astronaut.name === name);
  }
}
// astroAdventure([
//   "3",
//   "John 50 120",
//   "Kate 80 180",
//   "Rob 70 150",
//   "Explore - John - 50",
//   "Refuel - Kate - 30",
//   "Breathe - Rob - 20",
//   "End",
// ]);

astroAdventure([
  "4",
  "Alice 60 100",
  "Bob 40 80",
  "Charlie 70 150",
  "Dave 80 180",
  "Explore - Bob - 60",
  "Refuel - Alice - 30",
  "Breathe - Charlie - 50",
  "Refuel - Dave - 40",
  "Explore - Bob - 40",
  "Breathe - Charlie - 30",
  "Explore - Alice - 40",
  "End",
]);
