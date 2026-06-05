const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const price = document.querySelectorAll(".prices");

	let total = 0;
	price.forEach((price)  => {
		total += parseFloat(price.textContent);
	});

	const newRow = document.createElement("tr");
	const newCell = document.createElement("td");

	newCell.textContent = total;
	newCell.colSpan = 2;

	 newCell.id = "ans";  

	newRow.appendChild(newCell);
	document.querySelector("table").appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);