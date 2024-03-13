function colorize() {
  const rows = Array.from(document.querySelectorAll("tr:nth-child(even)"));
  rows.forEach((row) => {
    row.className = "teal-bg";
    // row.style.background = "teal";
  });
}
