function filterTable(table, filterText) {
	filterText = filterText.toUpperCase();
	const trList = table.querySelectorAll("tbody tr");
	for (let row = 0; row < trList.length; row++) {
		const tr = trList[row];
		const tdList = tr.querySelectorAll("td");
		let show = false;
		for (let col = 0; col < tdList.length; col++) {
			const tdText = tdList[col].innerText.toUpperCase();
			if (tdText.indexOf(filterText) >= 0){
				show = true;
				break;
			}
		}
		tr.style.display = show ? null : "none";
	}
}

function ScheduleSingleTask(timeout, taskId, task) {

	if (!ScheduleSingleTask.timeoutMap) {
		ScheduleSingleTask.timeoutMap = new Map();
	}
	
	if (ScheduleSingleTask.timeoutMap.has(taskId)) {
		clearTimeout(ScheduleSingleTask.timeoutMap.get(taskId));
		ScheduleSingleTask.timeoutMap.delete(taskId);
	}
	
	const fn = () => {
		ScheduleSingleTask.timeoutMap.delete(taskId);
		task();
	}
	
	ScheduleSingleTask.timeoutMap.set(taskId, setTimeout(fn, timeout));
}