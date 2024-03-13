function showText() {
  document.getElementById("text").style.display = "block";

  setTimeout(() => {
    document.getElementById("more").style.display = "none";
  }, 1000);
}
