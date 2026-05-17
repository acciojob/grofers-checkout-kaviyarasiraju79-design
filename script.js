// Get all price elements
const prices = document.querySelectorAll(".prices");

let total = 0;

// Calculate total price
prices.forEach(price => {
    total += Number(price.textContent);
});

// Select table
const table = document.querySelector("table");

// Create new row
const newRow = document.createElement("tr");

// Create new cell
const newCell = document.createElement("td");

// Set colspan and total text
newCell.colSpan = 2;
newCell.textContent = total;

// Append cell to row
newRow.appendChild(newCell);

// Append row to table
table.appendChild(newRow);