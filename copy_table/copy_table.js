function isEmpty(s) {
	if (s === undefined || s === null)
		return true;
	else {
		if (typeof s === "string")
			return s.length === 0;
		else
			return false;
	}
}

function elementsAsString(elements, separator, terminator) {
	let s = "";
	const hasSeparator = !isEmpty(separator);
	if (elements != null) {
		elements.forEach((e, i) => {
			if (i > 0 && hasSeparator)
				s += separator;
			s += e.innerText;
		});
		if (!isEmpty(terminator))
			s += terminator;
	}
	return s;
}

function queryThs(table) {
	const thead = table.querySelector("thead");
	return thead === null ? table.querySelectorAll("tr th") : thead.querySelectorAll("tr th");
}

function queryRows(table) {
	const tbody = table.querySelector('tbody');
	return tbody === null ? table.querySelectorAll('tr') : tbody.querySelectorAll('tr');
}
	
function tableAsString(table) {
	const colSep = "\t";
	const rowSep = "\n";
	let s = elementsAsString(queryThs(table), colSep, rowSep);
	const rows = queryRows(table);
	if (rows != null) {
		rows.forEach(row => {
			s += elementsAsString(row.querySelectorAll("td"), colSep, rowSep);
		});
	}
	return s;
}

function handleCopyButtonClick(tableId) {
	const table = document.getElementById(tableId);
	if (table instanceof HTMLTableElement) {
		navigator.clipboard.writeText(tableAsString(table)).then(
			() => alert("Copy success!"),
			(e) => alert("Failed to copy.", e)
		);
	}
}