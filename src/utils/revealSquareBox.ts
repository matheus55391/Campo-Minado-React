import IBoard from '../interfaces/IBoard'

function revealSquareBox(board: IBoard, row: number, col: number) {
	const squareBox = board.boxes[row][col]
  
	if (squareBox.isFlagged) {
		return // se a caixa já foi marcada com uma flag, não pode ser revelada
	}
  
	if (squareBox.isRevealed || squareBox.isMine) {
		return // se a caixa já foi revelada ou contém uma mina, não precisa revelar novamente
	}
  
	squareBox.isRevealed = true
  
	// se a caixa não tiver minas adjacentes, revela as caixas adjacentes
	if (squareBox.minesAround === 0) {
		const positions = [
			[-1, -1], [-1, 0], [-1, 1],
			[0, -1],           [0, 1],
			[1, -1],  [1, 0],  [1, 1]
		]
  
		for (const pos of positions) {
			const r = row + pos[0]
			const c = col + pos[1]
  
			if (r >= 0 && r < board.rows && c >= 0 && c < board.cols) {
				revealSquareBox(board, r, c)
			}
		}
	}
}

export default revealSquareBox