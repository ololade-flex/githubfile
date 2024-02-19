let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');

function place(cellIndex) {
    if (cells[cellIndex].textContent === '') {
        cells[cellIndex].textContent = currentPlayer;
        if (checkWin()) {
            alert('Player ' + currentPlayer + ' wins!');
            resetGame();
        } else if ([...cells].every(cell => cell.textContent !== '')) {
            alert('For draw!');
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (const combo of winCombos) {
        if (cells[combo[0]].textContent === currentPlayer &&
            cells[combo[1]].textContent === currentPlayer &&
            cells[combo[2]].textContent === currentPlayer) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}