let cells = document.querySelectorAll('#area td');
function start(cells) {
	for (let cell of cells) {
		cell.addEventListener('click', function() {
			this.textContent = 'X';
		});
	}
};
start(cells);