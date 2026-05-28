function calculateTotal() {
    // Get all price elements
    const prices = document.querySelectorAll(".prices");

    let total = 0;

    // Calculate total price
    prices.forEach(price => {
        total += Number(price.textContent);
    });

    // Get the table
    const table = document.querySelector("table");

    // Create new row
    const newRow = document.createElement("tr");

    // Create new cell
    const newCell = document.createElement("td");

    // Set colspan if needed
    newCell.colSpan = 2;

    // Add total text
    newCell.textContent = total;

    // Append cell to row
    newRow.appendChild(newCell);

    // Append row to table
    table.appendChild(newRow);
}

// Call the function
calculateTotal();