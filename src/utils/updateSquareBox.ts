import IBoard from '../interfaces/IBoard'
import markSquareBox from './markSquareBox'
import revealSquareBox from './revealSquareBox'

function updateSquareBox(board: IBoard, row: number, col: number, isFlag: boolean) {
	if (isFlag) {
		markSquareBox(board, row, col, true)
	} else {
		revealSquareBox(board, row, col)
	}
}

export default updateSquareBox