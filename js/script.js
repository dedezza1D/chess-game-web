document.addEventListener('DOMContentLoaded', () => {
    const chessboard = document.getElementById('chessboard');
    for (let i = 0; i < 8; i++) {
        let row = document.createElement('div');
        row.className = 'chess-row';
        for (let j = 0; j < 8; j++) {
            let square = document.createElement('div');
            square.className = 'chess-square square';
            // Alternate the color of the square
            if ((i + j) % 2 === 0) {
                square.classList.add('white-square');
            } else {
                square.classList.add('black-square');
            }
            row.appendChild(square);
        }
        chessboard.appendChild(row);
    }
});
