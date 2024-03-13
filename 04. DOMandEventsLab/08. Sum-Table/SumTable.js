function sumTable() {
  const prices = Array.from(document.querySelectorAll("td:nth-child(2)"));
  // remove last element because it will hold the sum
  prices.pop();
  const total = prices.reduce((acc, curr) => {
    return acc + Number(curr.textContent);
  }, 0);

  document.querySelector("#sum").textContent = total;
}
