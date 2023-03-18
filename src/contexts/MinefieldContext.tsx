import { createContext, useEffect, useState } from 'react'
import GameState from '../interfaces/GameState'
import IBoard from '../interfaces/IBoard'
import IMineField from '../interfaces/IMineField'
import generateMinefield from '../utils/generateMinefield'

interface IMinefieldContext {
  minefield: IMineField;
  updateBoard: (board: IBoard) => void;
  updateMinesLeft: (minesLeft: number) => void;
  updateGameState: (gameState: GameState) => void;
}

export const MinefieldContext = createContext<IMinefieldContext>({
	minefield: {
		board: { rows: 0, cols: 0, boxes: [] },
		mines: 0,
		minesLeft: 0,
		gameState: GameState.NOT_STARTED,
	},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	updateBoard: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	updateMinesLeft: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	updateGameState: () => {},
})

interface IMinefieldProviderProps {
    children: React.ReactNode;
  }
  
export const MinefieldProvider: React.FC<IMinefieldProviderProps> = ({ children }: IMinefieldProviderProps) => {
	const [minefield, setMinefield] = useState<IMineField>(generateMinefield(10, 10, 10))
  
	useEffect(()=>{
		console.log('🚀 ~ file: MinefieldContext.tsx:44 ~ minefield:', minefield)
	},[minefield])
	
	const updateBoard = (board: IBoard) => {
		setMinefield({ ...minefield, board })
	}
  
	const updateMinesLeft = (minesLeft: number) => {
		setMinefield({ ...minefield, minesLeft })
	}
  
	const updateGameState = (gameState: GameState) => {
		setMinefield({ ...minefield, gameState })
	}
	
	return (
		<MinefieldContext.Provider value={{ minefield, updateBoard, updateMinesLeft, updateGameState }}>
			{children}
		</MinefieldContext.Provider>
	)
}