function solve(input) {
  let n = parseInt(input[0]);
  let riders = {};

  // Function to print the final position of a rider
  function printFinalPosition(rider) {
    console.log(`${rider}`);
    console.log(`  Final position: ${riders[rider].position}`);
    delete riders[rider];
  }

  // Process rider details
  for (let i = 1; i <= n; i++) {
    let [rider, fuelCapacity, position] = input[i].split('|');
    riders[rider] = {
      fuelCapacity: parseFloat(fuelCapacity),
      position: parseInt(position)
    };
  }

  // Process commands
  let index = n + 1;
  while (index < input.length && input[index] !== "Finish") {
    let [action, rider, arg1, arg2] = input[index].split(' - ');

    if (action === "StopForFuel") {
      let minFuel = parseFloat(arg1);
      let newPos = parseInt(arg2);
      if (riders[rider].fuelCapacity < minFuel) {
        console.log(`${rider} stopped to refuel but lost his position, now he is ${newPos}.`);
        riders[rider].position = newPos;
      } else {
        console.log(`${rider} does not need to stop for fuel!`);
      }
    } else if (action === "Overtaking") {
      let rider1 = rider;
      let rider2 = arg1;
      if (riders[rider1].position < riders[rider2].position) {
        [riders[rider1].position, riders[rider2].position] = [riders[rider2].position, riders[rider1].position];
        console.log(`${rider1} overtook ${rider2}!`);
      }
    } else if (action === "EngineFail") {
      let lapsLeft = parseInt(arg1);
      console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
      delete riders[rider];
    }

    index++;
  }

  // Print final positions of finished riders
  for (let rider in riders) {
    printFinalPosition(rider);
  }
}


const input = (["3",
"Valentino Rossi|100|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi -50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])



solve(input);
