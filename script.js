// Get all price elements
const prices = document.querySelectorAll(".prices");

let total = 0;

// Calculate total
prices.forEach((price) => {
    total += Number(price.textContent);
});

// Select the table
const table = document.querySelector("table");

// Create new row
const row = document.createElement("tr");

// Create new cell
const cell = document.createElement("td");

cell.colSpan = 2;
cell.textContent = total;

// Append cell to row
row.appendChild(cell);

// Append row to table
table.appendChild(row);