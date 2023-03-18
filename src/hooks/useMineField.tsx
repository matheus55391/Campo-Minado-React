import { useContext } from 'react'
import { MinefieldContext } from '../contexts/MinefieldContext'
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
		updateSquareBox(newMinefield.board, row, col, isFlag)
		updateBoard(newMinefield.board)
	}

	return { minefield, updateBoard, updateMinesLeft, updateGameState, generate, markSquareBox }
}
