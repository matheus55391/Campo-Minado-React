import IBoard from '../interfaces/IBoard'

function markSquareBox(board: IBoard, row: number, col: number, isFlag: boolean) {
	const squareBox = board.boxes[row][col]
  
	if (squareBox.isRevealed) {
		return // se a caixa já foi revelada, não pode ser marcada com uma flag
	}
  
	squareBox.isFlagged = isFlag
}

export default markSquareBox