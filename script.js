window.onload = function () {

    // Select all price cells
    let prices = document.querySelectorAll(".price");

    let total = 0;

    // Calculate total
    for (let i = 0; i < prices.length; i++) {
        total += Number(prices[i].innerText);
    }

    // Get table
    let table = document.querySelector("table");

    // Create new row
    let newRow = document.createElement("tr");

    // Create new cell
    let newCell = document.createElement("td");

    // Add total value
    newCell.setAttribute("colspan", "2");
    newCell.innerText = total;

    // Append elements
    newRow.appendChild(newCell);
    table.appendChild(newRow);
};