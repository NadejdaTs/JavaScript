// async function getInfo() {
//   const busStopID = document.querySelector("#stopId").value;
//   const list = document.querySelector("ul");
//   const stopName = document.querySelector("#stopName");

//   list.innerHTML = "";

//   const service = {
//     busInfoURL: (ID) => `http://localhost:3030/jsonstore/bus/businfo/${ID}`,
//   };

//   // let busStopInfo;

//   try {
//     const response = await fetch(service.busInfoURL(busStopID));
//     const busStopInfo = await response.json();

//     stopName.textContent = busStopInfo.name;

//     Object.entries(busStopInfo.buses).map(([busNumber, timeInMinutes]) => {
//       const item = document.createElement("li");
//       item.textContent = `Bus ${busNumber} arrives in ${timeInMinutes} minutes`;

//       list.appendChild(item);
//     });
//   } catch (_) {
//     stopName.textContent = "Error";
//     return;
//   }
// }

function getInfo() {
  let idField = document.querySelector("#stopId").value;
  let stopNameField = document.querySelector("#stopName");
  let busSection = document.querySelector("#buses");
  let validIds = ["1287", "1308", "1327", "2334"];
  const url = `http://localhost:3030/jsonstore/bus/businfo/${idField}`;

  fetch(url)
    .then((response) => {
      if (!validIds.includes(idField)) {
        throw new Error("Error");
      }

      return response.json();
    })
    .then((data) => {
      busSection.replaceChildren(); // Smart way for removing the list elements

      Object.entries(data.buses).map(([bus, time]) => {
        let liElement = document.createElement("li");
        liElement.textContent = `Bus ${bus} arrives in ${time}`;

        busSection.appendChild(liElement);
      });
    })
    .catch((error) => {
      busSection.replaceChildren(); // Incase of an error the bus section must be cleared aswell

      stopNameField.textContent = error.message;
    });
}
