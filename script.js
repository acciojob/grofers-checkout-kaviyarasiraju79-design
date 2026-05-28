window.onload = function () {

    // Select all price cells
    let prices = document.querySelectorAll(".prices");

    let total = 0;

    // Add all prices
    prices.forEach(function(price) {
        total += parseInt(price.innerText);
    });

    // Select the table
    let table = document.getElementById("groceryTable");

    // Create a new row
    let row = document.createElement("tr");

    // Create a new cell
    let cell = document.createElement("td");

    // Set colspan and total value
    cell.colSpan = 2;
    cell.innerText = total;

    // Append cell to row
    row.appendChild(cell);

    // Append row to table
    table.appendChild(row);
};