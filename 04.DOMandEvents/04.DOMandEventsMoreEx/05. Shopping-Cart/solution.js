function solve() {
  const productList = Array.from(document.querySelectorAll(".product"));
  const textArea = document.querySelector("textarea");
  const checkoutButton = document.querySelector(".checkout");
  const allButtons = Array.from(document.querySelectorAll("button"));
  let uniqueItems = new Set();
  let total = 0;

  for (const section of productList) {
    let current = section.children;
    let product = current[1].children[0].textContent;
    let button = current[2].firstElementChild;
    let price = Number(current[3].textContent);

    button.addEventListener("click", function () {
      uniqueItems.add(product);
      textArea.value += `Added ${product} for ${price} to the cart.\n`;
      total += price;
    });
  }

  checkoutButton.addEventListener("click", function () {
    allButtons.map((x) => (x.disabled = "true"));
    textArea.value += `You bought ${Array.from(uniqueItems).join(
      ", "
    )} for ${total.toFixed(2)}`;
  });
}
