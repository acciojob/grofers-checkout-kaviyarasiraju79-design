window.onload = function () {

  // Select all price cells
  const prices = document.querySelectorAll(".price");

  let total = 0;

  // Add all prices
  prices.forEach(function(price) {
    total += parseInt(price.innerText);
  });

  // Select table
  const table = document.querySelector("table");

  // Create new row
  const row = document.createElement("tr");

  // Create new cell
  const cell = document.createElement("td");

  // Set colspan and total
  cell.colSpan = 2;
  cell.innerText = total;

  // Append cell to row
  row.appendChild(cell);

  // Append row to table
  table.appendChild(row);
};