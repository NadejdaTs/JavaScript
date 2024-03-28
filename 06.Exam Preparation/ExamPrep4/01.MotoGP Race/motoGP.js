function motoGP(input) {
  const cntOfRiders = input.shift();
  const ridersArray = input.slice(0, cntOfRiders);
  const commands = input.slice(cntOfRiders);

  const riders = ridersArray.reduce((acc, curr) => {
    const [riderName, fuelCapacity, position] = curr.split("|");
    acc[riderName] = [];
    acc[riderName].push({
      fuelCapacity: Number(fuelCapacity),
      position: Number(position),
    });
    return acc;
  }, {});

  const commandRunner = {
    StopForFuel: stopForFuel,
    Overtaking: overtaking,
    EngineFail: engineFail,
    Finish: finishRace,
  };

  commands.forEach((command) => {
    const [commandName, ...rest] = command.split(" - ");
    commandRunner[commandName](...rest);
  });

  function stopForFuel(rider, minFuel, newPosition) {
    let currRider = riders[rider];
    let currFuel = Number(currRider[0].fuelCapacity);
    let fuelToRefil = Number(minFuel);

    if (currFuel < fuelToRefil) {
      riders[rider][0].position = Number(newPosition);
      console.log(
        `${rider} stopped to refuel but lost his position, now he is ${newPosition}.`
      );
    } else {
      console.log(`${rider} does not need to stop for fuel!`);
    }
  }
  function overtaking(rider1, rider2) {
    let currRider1 = riders[rider1];
    let position1 = Number(currRider1[0].position);

    let currRider2 = riders[rider2];
    let position2 = Number(currRider2[0].position);
    if (position1 < position2) {
      [riders[rider1][0].position, riders[rider2][0].position] = [
        riders[rider2][0].position,
        riders[rider1][0].position,
      ];
      console.log(`${rider1} overtook ${rider2}!`);
    }
  }
  function engineFail(rider, lapsLeft) {
    delete riders[rider];
    console.log(
      `${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`
    );
  }
  function finishRace() {
    for (let rider in riders) {
      printResult(rider);
    }
  }

  function printResult(rider) {
    const position = Number(riders[rider][0].position);
    console.log(`${rider}`);
    console.log(`  Final position: ${position}`);
  }
}

// motoGP([
//   "3",
//   "Valentino Rossi|100|1",
//   "Marc Marquez|90|2",
//   "Jorge Lorenzo|80|3",
//   "StopForFuel - Valentino Rossi - 50 - 1",
//   "Overtaking - Marc Marquez - Jorge Lorenzo",
//   "EngineFail - Marc Marquez - 10",
//   "Finish",
// ]);

// motoGP([
//   "4",
//   "Valentino Rossi|100|1",
//   "Marc Marquez|90|3",
//   "Jorge Lorenzo|80|4",
//   "Johann Zarco|80|2",
//   "StopForFuel - Johann Zarco - 90 - 5",
//   "Overtaking - Marc Marquez - Jorge Lorenzo",
//   "EngineFail - Marc Marquez - 10",
//   "Finish",
// ]);
