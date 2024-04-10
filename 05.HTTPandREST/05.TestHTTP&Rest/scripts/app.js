/*const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetck data", undefined);
    }
  });

  // request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  request.open("GET", resource);
  request.send();
};

getTodos("todos/mario.json", (err, data) => {
  console.log(data);
  getTodos("todos/sofia.json", (err, data) => {
    console.log(data);
  });
});

getTodos((err, data) => {
  console.log("callback fired");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});*/

const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });

    // request.open("GET", "https://jsonplaceholder.typicode.com/todos");
    request.open("GET", resource);
    request.send();
  });
};

getTodos("todos/mario.json")
  .then((data) => {
    console.log("promise 1 resolved: ", data);
    return getTodos("todos/sofia.json", data);
  })
  .then((data) => {
    console.log("promise 2 resolved: ", data);
  })
  .catch((err) => {
    console.log("promise rejected: ", err);
  });

/*const getSomething = () => {
  return new Promise((resolve, reject) => {
    // resolve("some data");
    reject("some err");
  });
};

getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });*/
