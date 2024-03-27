function loadRepos() {
  let username = document.getElementById("username").value;
  console.log(username);

  fetch(`https://api.github.com/users/${username}/repos`)
    .then((res) => res.json())
    .then((body) => {
      //   console.log(body);
      body.forEach((repo) => {
        const currList = document.createElement("li");
        const currLink = document.createElement("a");

        currLink.textContent = repo.fullName;
        document.querySelector("ul").appendChild(currList);
        document.querySelector("currList").appendChild(currLink);
      });
    });
}
