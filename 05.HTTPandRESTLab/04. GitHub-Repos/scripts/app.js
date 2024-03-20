function loadRepos() {
  //  const repos = fetch("https://api.github.com/users/testnakov/repos");
  //   console.log(repos);
  /*console.log("1");
  setTimeout(() => console.log("first"), 1000);
  setTimeout(() => console.log("second"), 2000);
  console.log("3");*/

  /*fetch("https://api.github.com/users/testnakov/repos")
    .then((res) => res.json())
    .then((body) => {
      body.forEach((repo) => {
        const name = document.createElement("h2");
        name.textContent = repo.name;

        document.querySelector("body").appendChild(name);
      });
    });*/

  //   console.log(res).catch((err) => console.log(err))

  new Promise((resolve, reject) => {
    setTimeout();
  });
}
