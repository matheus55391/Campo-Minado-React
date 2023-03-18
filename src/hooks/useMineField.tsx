import { useContext } from 'react'
import { MinefieldContext } from '../contexts/MinefieldContext'
import generateMinefield from '../utils/generateMinefield'

export function useMinefield() {
	const { minefield, updateBoard, updateMinesLeft, updateGameState } = useContext(MinefieldContext)

	const generate = (rows: number, cols: number, minePercent: number) => {
		const newMinefield = generateMinefield(rows, cols, minePercent)
		updateBoard(newMinefield.board)
		updateMinesLeft(newMinefield.minesLeft)
		updateGameState(newMinefield.gameState)
	}

	return { minefield, updateBoard, updateMinesLeft, updateGameState, generate }
}
