import GameState from '../interfaces/GameState'
import IMineField from '../interfaces/IMineField'
import ISquareBox from '../interfaces/ISquareBox'
import countMinesAround from './countMinesAround'

function generateMinefield(rows: number, cols: number, minePercent: number): IMineField {
	// calcula a quantidade de minas baseado na porcentagem
	const totalBoxes = rows * cols
	const totalMines = Math.floor(totalBoxes * (minePercent / 100))

	// cria uma matriz de isMine inicializada com falsos
	const isMine: boolean[][] = new Array(rows).fill(false).map(() => new Array(cols).fill(false))

	// adiciona as minas aleatoriamente na matriz de isMine
	let minesAdded = 0
	while (minesAdded < totalMines) {
		const row = Math.floor(Math.random() * rows)
		const col = Math.floor(Math.random() * cols)
		if (!isMine[row][col]) {
			isMine[row][col] = true
			minesAdded++
		}
	}

	// cria a matriz de boxes
	const boxes: ISquareBox[][] = []
	for (let row = 0; row < rows; row++) {
		boxes[row] = new Array(cols)
		for (let col = 0; col < cols; col++) {
			const minesAround = countMinesAround(isMine, row, col)
			boxes[row][col] = {
				row,
				col,
				isRevealed: false,
				isMine: isMine[row][col],
				isFlagged: false,
				minesAround,
			}
		}
	}

	// retorna o objeto do tipo IMineField
	return {
		board: { rows, cols, boxes },
		mines: totalMines,
		minesLeft: totalMines,
		gameState: GameState.NOT_STARTED,
	}
}

export default generateMinefield
