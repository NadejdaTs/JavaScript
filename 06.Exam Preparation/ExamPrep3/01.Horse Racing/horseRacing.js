function horseRacing(input) {
  let horseNames = [];
  const test = input.shift().split("|");
  test.forEach((element) => {
    horseNames.push(element);
  });

  let winner = "";
  let length = horseNames.length - 1;
  for (const line of input) {
    if (line === "Finish") {
      winner = horseNames[length];
      console.log(horseNames.join("->"));
      console.log(`The winner is: ${winner}`);
      return;
    }
    let command = line.split(" ")[0];

    if (command === "Retake") {
      let overtaking = line.split(" ")[1];
      let overtaken = line.split(" ")[2];
      if (horseNames.indexOf(overtaking) < horseNames.indexOf(overtaken)) {
        horseNames.splice(horseNames.indexOf(overtaken), 1, overtaking);
        horseNames.splice(horseNames.indexOf(overtaking), 1, overtaken);
        console.log(`${overtaking} retakes ${overtaken}.`);
      }
    }
    if (command === "Trouble") {
      let horseName = line.split(" ")[1];
      let currIndex = horseNames.indexOf(horseName);
      if (currIndex > 0) {
        let newIndex = currIndex - 1;
        let otherHorse = horseNames[newIndex];
        horseNames.splice(currIndex, 1, otherHorse);
        horseNames.splice(newIndex, 1, horseName);
        console.log(`Trouble for ${horseName} - drops one position.`);
      }
    }
    if (command === "Rage") {
      let horseName = line.split(" ")[1];
      let currIndex = horseNames.indexOf(horseName);
      let increaseIndex = currIndex + 2;

      if (currIndex < length) {
        if (currIndex + 1 === length) {
          increaseIndex--;
        }

        horseNames.splice(currIndex, 1);
        horseNames.splice(increaseIndex, 1, horseName);
        console.log(`${horseName} rages 2 positions ahead.`);
      }
    }
    if (command === "Miracle") {
      let horseName = horseNames[0];
      horseNames.splice(0, 1);
      horseNames.push(horseName);
      console.log(`What a miracle - ${horseName} becomes first.`);
    }
  }
}

// horseRacing([
//   "Bella|Alexia|Sugar",
//   "Retake Alexia Sugar",
//   "Rage Bella",
//   "Trouble Bella",
//   "Finish",
// ]);

// horseRacing([
//   "Onyx|Domino|Sugar|Fiona",
//   "Trouble Onyx",
//   "Retake Onyx Sugar",
//   "Rage Domino",
//   "Miracle",
//   "Finish",
// ]);

// horseRacing([
//   "Fancy|Lilly",
//   "Retake Lilly Fancy",
//   "Trouble Lilly",
//   "Trouble Lilly",
//   "Finish",
//   "Rage Lilly",
// ]);
