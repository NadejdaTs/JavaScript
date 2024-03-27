function loadCommits() {
  const username = document.querySelector("#username").value;
  const repo = document.querySelector("#repo").value;

  const list = document.querySelector("ul");
  list.innerHTML = "";

  fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
    .then((res) => res.json())
    .then((commits) => {
      commits.forEach((commit) => {
        const item = document.createElement("li");
        item.textContent = commit.commit.message;

        list.appendChild(item);
      });
    });
}
// async function loadCommits() {
//   const username = document.querySelector("#username").value;
//   const repo = document.querySelector("#repo").value;

//   const list = document.querySelector("ul");
//   list.innerHTML = "";

//   const response = await fetch(
//     `https://api.github.com/repos/${username}/${repo}/commits`
//   );
//   const body = await response.json();
// }
