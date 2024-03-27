function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let inputText = JSON.parse(
      document.querySelector("#inputs textarea").value
    );
    let firstParagraph = document.querySelector("#bestRestaurant p");
    let secondParagraph = document.querySelector("#workers p");
    let resultObj = [];

    for (let restaurant of inputText) {
      let currRestaurant = { employees: [] };
      currRestaurant["name"] = restaurant.split(" - ")[0];
      let restaurantWorkers = restaurant.split(" - ")[1].split(", ");

      for (const worker of restaurantWorkers) {
        let [name, salary] = worker.split(" ");
        salary = Number(salary);
        currRestaurant.employees.push({ name, salary });
      }

      let targetRestaurant = resultObj.find(
        (x) => x.name === currRestaurant.name
      );

      if (targetRestaurant) {
        let allWorkers = targetRestaurant.employees.concat(
          currRestaurant.employees
        );
        targetRestaurant.employees = allWorkers;
      } else {
        resultObj.push(currRestaurant);
      }

      let totalCash = currRestaurant.employees.reduce(
        (x, y) => x + y.salary,
        0
      );
      currRestaurant.averageSalary =
        totalCash / currRestaurant.employees.length || 0;
    }

    resultObj = resultObj.sort((x, y) => y.averageSalary - x.averageSalary);
    let bestRestaurant = resultObj[0];
    bestRestaurant.employees = bestRestaurant.employees.sort(
      (x, y) => y.salary - x.salary
    );
    let bestSalary = bestRestaurant.employees[0].salary;
    let bestR = `Name: ${
      bestRestaurant.name
    } Average Salary: ${bestRestaurant.averageSalary.toFixed(
      2
    )} Best Salary: ${bestSalary.toFixed(2)}`;
    let bestWorkers = bestRestaurant.employees
      .reduce(
        (acc, x) => (acc += `Name: ${x.name} With Salary: ${x.salary} `),
        ""
      )
      .slice(0, -1);

    firstParagraph.textContent = bestR;
    secondParagraph.textContent = bestWorkers;
  }
}
