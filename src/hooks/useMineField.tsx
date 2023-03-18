import { useContext } from 'react'
import { MinefieldContext } from '../contexts/MinefieldContext'
import GameState from '../interfaces/GameState'
import generateMinefield from '../utils/generateMinefield'
import updateSquareBox from '../utils/updateSquareBox'

export type MarkType = 'reveal' | 'flag'

export function useMinefield() {
	const { minefield, updateBoard, updateMinesLeft, updateGameState } = useContext(MinefieldContext)

	const generate = (rows: number, cols: number, minePercent: number) => {
		const newMinefield = generateMinefield(rows, cols, minePercent)
		updateBoard(newMinefield.board)
		updateMinesLeft(newMinefield.minesLeft)
		updateGameState(newMinefield.gameState)
	}

	const markSquareBox = (row: number, col: number, isFlag: boolean) => {
		const newMinefield = { ...minefield }

		// Verifica se o game state é LOST e retorna sem atualizar a matriz
		if (newMinefield.gameState === GameState.LOST) {
			return
		}

		const squareBox = newMinefield.board.boxes[row][col]

		// Verifica se o SquareBox clicado é uma bomba
		if (!isFlag && squareBox.isMine) {
			// Atualiza todos os SquareBoxes que são bombas e ainda não foram revelados
			newMinefield.board.boxes.forEach((row) => {
				row.forEach((squareBox) => {
					if (squareBox.isMine && !squareBox.isRevealed) {
						squareBox.isRevealed = true
					}
				})
			})

			// Atualiza o game state para LOST
			newMinefield.gameState = GameState.LOST
		}

		updateSquareBox(newMinefield.board, row, col, isFlag)
		updateBoard(newMinefield.board)
	}

	return { minefield, updateBoard, updateMinesLeft, updateGameState, generate, markSquareBox }
}
