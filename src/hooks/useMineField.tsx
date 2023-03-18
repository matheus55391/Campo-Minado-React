import { useContext } from 'react'
import { MinefieldContext } from '../contexts/MinefieldContext'
import GameState from '../interfaces/GameState'
import generateMinefield from '../utils/generateMinefield'
import updateSquareBox from '../utils/updateSquareBox'

export function useMinefield() {
	const { minefield, updateBoard, updateMinesLeft, updateGameState } = useContext(MinefieldContext)

	const generate = (rows: number, cols: number, minePercent: number) => {
		const newMinefield = generateMinefield(rows, cols, minePercent)
		updateBoard(newMinefield.board)
		updateMinesLeft(newMinefield.minesLeft)
		updateGameState(newMinefield.gameState)
	}

	const handleBoxClick = (row: number, col: number, isFlag: boolean) => {
		// Obtém o box correspondente à linha e coluna passadas como argumento
		const box = minefield.board.boxes[row][col]
	
		// Não atualize o estado se o box já foi revelado ou marcado com bandeira
		if (box.isRevealed || (box.isFlagged && !isFlag)) {
			return
		}
	
		// Cria uma cópia do objeto minefield
		const newMinefield = { ...minefield }
	
		// Verifica se o game state é LOST e retorna sem atualizar a matriz
		if (newMinefield.gameState === GameState.LOST) {
			return
		}
	
		// Verifica se o box clicado é uma bomba
		if (!isFlag && box.isMine) {
			// Atualiza todos os boxes que são bombas e ainda não foram revelados
			newMinefield.board.boxes.forEach((row) => {
				row.forEach((box) => {
					if (box.isMine && !box.isRevealed) {
						box.isRevealed = true
					}
				})
			})
	
			// Atualiza o game state para LOST
			newMinefield.gameState = GameState.LOST
		}
	
		// Atualiza o estado do box clicado (revealed ou flagged)
		updateSquareBox(newMinefield.board, row, col, isFlag)
	
		// Atualiza a contagem de boxes revelados e marcados com bandeira
		const revealedCount = newMinefield.board.boxes.flat().filter(box => box.isRevealed).length
		const flaggedCount = newMinefield.board.boxes.flat().filter(box => box.isFlagged).length
	
		// Verifica se o jogo deve ser reiniciado
		if (revealedCount + flaggedCount === 0) {
			generate(newMinefield.board.rows, newMinefield.board.cols, 10)
			return
		}
	
		// Atualiza o estado do tabuleiro com as mudanças
		updateBoard(newMinefield.board)
	}

	return { minefield, updateBoard, updateMinesLeft, updateGameState, generate,handleBoxClick }
}
