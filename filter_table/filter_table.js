function filterTable(table, filterText) {
	filterText = filterText.toUpperCase();
	const trList = table.querySelectorAll("tbody tr");
	for (let row = 0; row < trList.length; row++) {
		const tr = trList[row];
		const tdList = tr.querySelectorAll("td");
		tr.style.display = "none";
		for (let col = 0; col < tdList.length; col++) {
			const tdText = tdList[col].innerText.toUpperCase();
			if (tdText.indexOf(filterText) >= 0){
				tr.style.display = "";
				break;
			}
		}
	}
}