window.addEventListener("load", solve);

function solve() {
  const inputfields = {
    player: document.querySelector("#player"),
    score: document.querySelector("#score"),
    round: document.querySelector("#round"),
  };

  const selectors = {
    addBtn: document.querySelector("#add-btn"),
    clearBtn: document.querySelector("#clear"),
    sureList: document.querySelector("#sure-list"),
    scoreboardList: document.querySelector("#scoreboard-list"),
    board: document.querySelector(".board"),
  };

  selectors.addBtn.addEventListener("click", addCurrPlayer);

  function addCurrPlayer() {
    if (
      inputfields.player.value == "" ||
      inputfields.score.value == "" ||
      inputfields.round.value == ""
    ) {
      return;
    }

    const currList = document.createElement("li");
    currList.classList.add("dart-item");

    const article = document.createElement("article");
    const playerName = document.createElement("p");
    playerName.textContent = inputfields.player.value;
    const playerScore = document.createElement("p");
    playerScore.textContent = "Score: " + inputfields.score.value;
    const playerRound = document.createElement("p");
    playerRound.textContent = "Round: " + inputfields.round.value;

    const editBtn = document.createElement("button");
    editBtn.classList.add("btn", "edit");
    editBtn.textContent = "Edit";

    const okBtn = document.createElement("button");
    okBtn.classList.add("btn", "ok");
    okBtn.textContent = "Ok";

    article.appendChild(playerName);
    article.appendChild(playerScore);
    article.appendChild(playerRound);
    currList.appendChild(article);
    currList.appendChild(editBtn);
    currList.appendChild(okBtn);
    selectors.sureList.appendChild(currList);

    clearInputFields();
    selectors.addBtn.disabled = true;

    editBtn.addEventListener("click", editPlayerInformation);
    okBtn.addEventListener("click", addToScoreboard);
    selectors.board.addEventListener("click", clearBoard);

    function editPlayerInformation() {
      inputfields.player.value = playerName.textContent;
      inputfields.score.value = playerScore.textContent.substring(7);
      inputfields.round.value = playerRound.textContent.substring(7);
      selectors.sureList.removeChild(currList);
      selectors.addBtn.disabled = false;
    }

    function addToScoreboard() {
      currList.removeChild(editBtn);
      currList.removeChild(okBtn);
      selectors.sureList.removeChild(currList);
      selectors.scoreboardList.appendChild(currList);
      selectors.addBtn.disabled = false;
    }

    function clearBoard() {
      location.reload();
    }

    function clearInputFields() {
      Object.values(inputfields).forEach((input) => {
        input.value = "";
      });
    }
  }
}
