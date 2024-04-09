window.addEventListener("load", solve);

function solve() {
  const inputfields = {
    expenseType: document.querySelector("#expense"),
    amount: document.querySelector("#amount"),
    date: document.querySelector("#date"),
  };

  const selectors = {
    addBtn: document.querySelector("#add-btn"),
    deleteBtn: document.querySelector(".delete"),
    previewList: document.querySelector("#preview-list"),
    expensesList: document.querySelector("#expenses-list"),
  };

  selectors.addBtn.addEventListener("click", addCurrPlayer);

  function addCurrPlayer() {
    if (
      inputfields.expenseType.value == "" ||
      inputfields.amount.value == "" ||
      inputfields.date.value == ""
    ) {
      return;
    }

    const currList = document.createElement("li");
    currList.classList.add("expense-item");

    const article = document.createElement("article");
    const type = document.createElement("p");
    type.textContent = "Type: " + inputfields.expenseType.value;
    const amount = document.createElement("p");
    amount.textContent = "Amount: " + inputfields.amount.value + "$";
    const date = document.createElement("p");
    date.textContent = "Date: " + inputfields.date.value;

    const divBtn = document.createElement("div");
    divBtn.classList.add("buttons");
    const editBtn = document.createElement("button");
    editBtn.classList.add("btn", "edit");
    editBtn.textContent = "Edit";

    const okBtn = document.createElement("button");
    okBtn.classList.add("btn", "ok");
    okBtn.textContent = "Ok";

    article.appendChild(type);
    article.appendChild(amount);
    article.appendChild(date);
    divBtn.appendChild(editBtn);
    divBtn.appendChild(okBtn);
    currList.appendChild(article);
    currList.appendChild(divBtn);
    selectors.previewList.appendChild(currList);

    clearInputFields();
    selectors.addBtn.disabled = true;

    editBtn.addEventListener("click", editExpenseInformation);
    okBtn.addEventListener("click", addToExpenses);
    selectors.deleteBtn.addEventListener("click", clearBoard);

    function editExpenseInformation() {
      inputfields.expenseType.value = type.textContent.substring(6);
      inputfields.amount.value = amount.textContent.substring(
        8,
        amount.textContent.length - 1
      );
      inputfields.date.value = date.textContent.substring(6);
      selectors.previewList.removeChild(currList);
      selectors.addBtn.disabled = false;
    }

    function addToExpenses() {
      currList.removeChild(divBtn);
      selectors.previewList.removeChild(currList);
      selectors.expensesList.appendChild(currList);
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
